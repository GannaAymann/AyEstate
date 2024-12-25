import React from 'react'
import Image from 'next/image';
export const Info = () => {
    const array = [
        {
            percentage: "800+",
            title: "Succesfull Project"
        }, {
            percentage: "600+",
            title: "Satisfied Client"
        }, {
            percentage: "150+",
            title: "Awwards Winners"
        }
    ]
    return (
        <div>
            <Image
                width={1240}
                height={520}
                src={"/images/About.png"}
                alt="about"
                className="w-full"

            />


            <div>
                {array.map((item, index) => (
                    <div key={index}>
                        <p>{item.percentage}</p>
                        <p>{item.title}</p>
                    </div>
                ))}

            </div>

        </div>
    )
}
