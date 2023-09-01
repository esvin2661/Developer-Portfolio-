'use client'
import React from "react";
import {Card, CardHeader,CardFooter, CardBody, Image} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="py-4">
      <CardHeader  className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader >
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="
          https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          width={270}
        />
      </CardBody>
    </Card>
  
  );
}
