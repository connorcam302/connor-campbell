import React from "react";

type Event = {
    name: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    image: string;
    bio: string;
}

const events: Event[] = [
    {
        name: "Northumbria University",
        role: "First Class BSc Hons Computer Science",
        startDate: new Date("2018-09-25"),
        endDate: new Date("2022-06-04"),
        image: "northumbria",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus sem, mollis eget lobortis auctor, sagittis ac sem. Ut vehicula enim quis venenatis fermentum. Ut accumsan sagittis massa at aliquet. Sed aliquet massa sit amet arcu bibendum facilisis id a purus. Aenean ullamcorper, orci in dapibus maximus, massa ligula aliquam libero, nec pharetra nisi velit vel nisi. Proin finibus id elit vel pharetra. Donec eget placerat ligula, ac semper justo. Ut tempor quam tristique tempus imperdiet. Mauris et erat eu tortor molestie maximus."
    },
    {
        name: "Accenture",
        role: "Packaged Application Development Analyst",
        startDate: new Date("2022-06-17"),
        image: "Accenture",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus sem, mollis eget lobortis auctor, sagittis ac sem. Ut vehicula enim quis venenatis fermentum. Ut accumsan sagittis massa at aliquet. Sed aliquet massa sit amet arcu bibendum facilisis id a purus. Aenean ullamcorper, orci in dapibus maximus, massa ligula aliquam libero, nec pharetra nisi velit vel nisi. Proin finibus id elit vel pharetra. Donec eget placerat ligula, ac semper justo. Ut tempor quam tristique tempus imperdiet. Mauris et erat eu tortor molestie maximus."
    }]

const Timeline: React.FC = () => {

    return (
        <div>

        </div>)
}

export default Timeline
