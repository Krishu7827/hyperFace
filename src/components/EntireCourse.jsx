import React from "react";
import ScrollBar from "./Scroll";


const EntireCourse = () => {

    let EntireCourse = [
        {
            "header": "Course For You",
            "text": "Listen to byte-size audio courses from top thinkers",
            "CourseDetails": [
                {
                    "id": "course_1",
                    "title": "Fundamentals of Product Design",
                    "chapters": 8,
                    "duration": "2 Hours",
                    "color": "#FFADAD"
                },
                {
                    "id": "course_2",
                    "title": "Advanced Product Strategy",
                    "chapters": 10,
                    "duration": "3 Hours",
                    "color": "#FFD6A5"
                },
                {
                    "id": "course_3",
                    "title": "AWS(Amazon Web Service)",
                    "chapters": 20,
                    "duration": "10 hours",
                    "color": "#F4CE14"
                }
            ]
        },
        {
            "header":"Article Reads",
            "text":"Listen to audio versions of top web articles",
            "CourseDetails": [
                {
                  "id": "article_1",
                  "title": "The Future of Product Design",
                  "duration": "15 min",
                  "color": "#FDFFB6",
                  "chapters": 10,
                },
                {
                  "id": "article_2",
                  "title": "Understanding User Needs",
                  "duration": "20 min",
                  "color": "#FF9130",
                  "chapters": 20,
                },
                {
                    "id": "article_2",
                    "title": "Operatin System",
                    "duration": "20 Hours",
                    "color": "#C4DFDF",
                    "chapters": 17,
                  }
              ]
        },
       
    ]

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        {EntireCourse.map((el,i)=>
            <ScrollBar header={el.header} text={el.text} data={el.CourseDetails} key={i}/>
        )}
        </div>
    )
}

export default EntireCourse