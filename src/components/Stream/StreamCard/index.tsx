import { Card, CardContent } from "@/ui";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import React from "react";

function index() {
  return (
    <Card>
      <CardContent>
        <Header />
        <Body />
        <Footer />
      </CardContent>
    </Card>
  );
}

export default React.memo(index);
