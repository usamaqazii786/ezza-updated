/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import Image, { StaticImageData } from "next/image";
import project_thumb_1 from "@/assets/img/project/project-details-thumb-1.jpg";
import project_thumb_2 from "@/assets/img/project/project-details-list-thumb-1.jpg";
import { useQuery } from "@apollo/client/react";
import { GETBYID } from "@/queries/getPosts";
import loader from "@/assets/img/Loader/Hnhloaderbkue.gif";

type DataType = {
  thumb_img: StaticImageData;
  title: string;
  info: {
    title: string;
    name: string;
  }[];
  description: string;
  title_2: string;
  sm_des: string;
  features: string[];
  sm_img: StaticImageData;
};

// const project_details_content: DataType = {
//   thumb_img: project_thumb_1,
//   title: "Branding Process",
//   info: [
//     {
//       title: "Clients",
//       name: "Liza Olivarez",
//     }, {
//       title: "Catagory",
//       name: "Idea, Technology",
//     },
//     {
//       title: "Service",
//       name: "IT consulting, Buisness",
//     }, {
//       title: "Web",
//       name: "www.tecz.demo",
//     },
//   ],
//   description: "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
//   title_2: "The challenge of Project",
//   sm_des: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing",
//   features: [
//     "Neque porro qui dolorem ipsum quia quaed inventore lorem ipsum is simply free text used by copytyping refreshing.veritatis et quasi",
//     "Copytyping refreshing. Neque porro qui dolorem ipsum quia lorem ipsum is simply free text used by quaed inventore veritatis et quasi",
//     "Free text used by copytyping refreshing. Neque porro qui dolorem lorem ipsum is simply ipsum quia quaed inventore veritatis et quasi",
//   ],
//   sm_img: project_thumb_2

// }
// const {
//   thumb_img,
//   title,
//   info,
//   description,
//   title_2,
//   sm_des,
//   features,
//   sm_img,
// } = project_details_content
interface ProjectDetailsProps {
  id: number; // Assuming id is a string, you can adjust the type accordingly
}

const ProjectDetailsArea: React.FC<ProjectDetailsProps> = ({ id }) => {
  const baseUrl = "https://api.hnhtechsolutions.com";
  // console.log(id);
  // Alternatively, using the unary plus operator
  // const idString: string = id;
  // const idNumber: number = +idString;
  // console.log(idNumber, idString);
  // console.log(typeof idNumber, typeof idString);

  const { data, error, loading } = useQuery(GETBYID, {
    variables: {
      projectId: +id,
    },
  });

  // Handle loading and error states
  if (loading)
    return (
        <div className="loader-overlayss"> 
        </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  const data1 = data?.projectById;
  console.log(data1, "data1");

  return (
    <>
      <section className="project-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-project-details-thumb w-img mb-30">
                <img src={baseUrl + data1?.images} alt="image" />
              </div>
            </div>
          </div>
          <div className="tp-project-details-catagory-border mb-30">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-project-details-catagory mb-20">
                  <h4 className="tp-project-details-catagory-title">
                    {data1?.title}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="tp-project-details-catagory-item lg-mb-35">
                  <p>
                    <span>Client : </span>
                    <p className="mb-0">
                      {data1?.client.firstName} {data1?.client.lastName}{" "}
                    </p>
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="tp-project-details-catagory-item lg-mb-35">
                  <p>
                    <span>Catagory :</span>{" "}
                    <>
                      {data1?.categories?.map((categories: any) => (
                        <p className="mb-0" key={categories?.id}>
                          {categories?.name},
                        </p>
                      ))}
                    </>{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="tp-project-details-catagory-item lg-mb-35">
                  <p>
                    <span>Technologies :</span>
                    {data1?.technologies?.map((technologies: any) => (
                      <p className="mb-0" key={technologies?.id}>
                        {technologies?.name},
                      </p>
                    ))}{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="tp-project-details-catagory-item lg-mb-35">
                  <p>
                    <span>ProjectDemoLink : </span>{" "}
                    {data1?.ProjectDemoLink?.map((demolink: any) => (
                      <a
                        className="mb-0"
                        href={demolink?.link}
                        key={demolink?.id}
                        target="_blank"
                      >
                        <div className="tp-solution-info-content">
                          <h4 className="tp-btn">
                            {demolink.title}
                          </h4>
                        </div>
                      </a>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-project-details-catagory-content mb-40">
                <p>{data1?.description}</p>
              </div>
            </div>
          </div>
          {data1?.ProjectDescription?.map((projectdescription: any) => {
            return (
              <>
                <div className="row" key={projectdescription?.id}>
                  <div className="col-lg-12">
                    <div className="tp-project-details-catagory">
                      <h4 className="tp-project-details-catagory-title mb-20">
                        {projectdescription?.heading}
                      </h4>
                      <p className="mb-35">{projectdescription?.description}</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tp-project-details-list">
                      {projectdescription?.list?.map((list: any) => (
                        <>
                          <div
                            className="tp-project-details-list-item d-flex"
                            key={list}
                          >
                            <div className="tp-project-details-list-icon">
                              <i className="fa-thin fa-check" />
                            </div>
                            <div className="tp-project-details-list-content">
                              <p>{list}</p>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="tp-project-details-list-thumb w-img">
                      <Image
                        src={`${baseUrl + projectdescription?.images[0]}`}
                        alt="Loader CreativeWebSolutions"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsArea;
