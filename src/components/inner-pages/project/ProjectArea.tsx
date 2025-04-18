/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import project_data from '@/data/ProjectData';
import { useQuery } from '@apollo/client';
import GETDATA from '@/queries/getPosts';
import loader from '@/assets/img/logo/EZAS-Tech-0244.png'
import { useInView } from 'react-intersection-observer';

const ProjectArea = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const projects = project_data.filter(items => items.page === "project_1")

  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(projects.length / itemsPerPage);

  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % projects.length;
    setItemOffset(newOffset);
  };
  const baseUrl = 'https://api.hnhtechsolutions.com'
  const { data, error, loading } = useQuery(GETDATA);
  const data1 = data?.projects;

  // Handle loading and error states
  if (loading)
    return (
      <div className="loader-overlayss">
      </div>
    );
  if (error) return //<p>Error: {error.message}</p>;


  console.log("hnh project", data1)
  return (
    <div ref={ref}>
      <section className="project-area tp-project-3-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            {Array.isArray(data1) &&
              data1.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6 mt-3 mb-3">
                  <Link href={`/project-details/${item?.id}`}> <div className="image-container22">
                    <img src={baseUrl + item?.images} alt="Sample Image" />
                    <div className="overlay22">
                      <span className='set23 d-block '>{item?.categories[0]?.name}</span>
                      <span className='erte33 mt-2'> {item.title}</span>
                    </div>
                  </div>
                  </Link>




                </div>
              ))}

          </div>

          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-30">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={<i className="fa-light fa-arrow-right-long"></i>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={9}
                  pageCount={pageCount}
                  previousLabel={<i className="fa-light fa-arrow-left-long"></i>}
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectArea;