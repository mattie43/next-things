"use client";

import useSWRInfinite from "swr/infinite";

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Timezone {
    offset: string;
    description: string;
}

interface Street {
    number: number;
    name: string;
}

interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface Dob {
    date: string;
    age: number;
}

interface Id {
    name: string;
    value: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Result {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Dob;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

interface ApiResp {
    results: Result[];
    info: Info;
}

export const useUsers = () => {
    const url = "https://randomuser.me/api/?results=20&seed=abc";

    const fetcher = (pageUrl: string) =>
        fetch(pageUrl).then((res) => res.json());

    const getKey = (pageIndex: number) => `${url}&page=${pageIndex + 1}`;

    const { isLoading, data, isValidating, setSize } = useSWRInfinite<ApiResp>(
        getKey,
        fetcher,
        {
            revalidateFirstPage: false,
            revalidateOnFocus: false,
            revalidateIfStale: false,
        }
    );

    const users = data?.flatMap(({ results }) => results);

    return { isLoading, setSize, isValidating, users };
};
