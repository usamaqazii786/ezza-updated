'use client';
import React from 'react'
import { useInView } from 'react-intersection-observer';

export default function ServiceDetailContent({ data,datas }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
    console.log(">>>>", data)
    return (
        <div ref={ref}>
          <section className={inView ?"ert34 zoom-ins":"ert34 zoom-outs"}>
                <div className="container">
                    <div className="row">
                        <div className={inView ?"col-md-7 slide-in-rights":"col-md-7"}>
                            <div>
                                {data?.paraMain && (

                                    <span className='text-dark fw-30 fw-bolder' style={{fontSize:"25px",fontWeight:900}}>{data?.paraMain}</span>
                                )
                                }
                                {data?.ContentHeading1 && (

                                    <span className='d-block text-dark fw-25' ><strong>{data?.ContentHeading1}</strong></span>
                                )

                                }
{/* UI UX */}
{data?.para1 && (

<span className='d-block text-dark fw-20 mt-3'>{data?.para1}</span>
)

}
{data?.para2 && (
<span className='d-block text-dark fw-20 mt-3'>{data?.para2}</span>
)
}
{data?.para3 && (
<span className='d-block text-dark fw-20 mt-3'>{data?.para3}</span>
)
}
{data?.para4 && (
<span className='d-block text-dark fw-20 mt-3'>{data?.para4}</span>
)
}
{data?.para5 && (
<span className='d-block text-dark fw-20 mt-3'>{data?.para5}</span>
)
}
{data?.para6 && (
<span className='d-block text-dark fw-20 mt-3'>{data?.para6}</span>
)
}
{data?.para7 && (
<span className='d-block text-dark fw-20 mt-3'>{data?.para7}</span>
)
}
{/* UI UX */}
{/* machine Learning */}
{data?.machineList1?.length > 0 && (
  <ol className='mt-3' style={{padding:"0"}}>
    {data.machineList1.map((item) => (
      <li className='mt-3' key={item.id}>
        <span className='fw-25 fw-bolder d-block text-dark' ><strong>{item.listpara}</strong></span> <span className='fw-25 d-block text-dark' >{item.listspan}</span>
      </li>
    ))}
  </ol>
)}
{/* machine Learning */}


                                {data?.ContentHeading2 && (

                                    <span className='d-block text-dark fw-25 mt-2'><strong>{data?.ContentHeading2}</strong></span>
                                )

                                }
                                {data?.para22 && (

                                    <span className='d-block text-dark fw-20 mt-3'>{data?.para22}</span>
                                )

                                }
                                {data?.ContentHeading3 && (

                                    <span className='d-block text-dark fw-25 fw-bolder mt-3'><strong>{data?.ContentHeading3}</strong></span>
                                )

                                }
                             {data?.list1?.length > 0 && (
  <ul>
    {data.list1.map((item) => (
      <li  key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}

{data?.ContentHeading4 && (

<span className='d-block text-dark fw-25 fw-bolder mt-3'><strong>{data?.ContentHeading4}</strong></span>
)

}
{data?.list2?.length > 0 && (
<ul>
{data.list2.map((item) => (
<li key={item.id}>
<span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
</li>
))}
</ul>
)}
{data?.para23 && (

<span className='d-block text-dark fw-25 fw-bolder mt-3'>{data?.para23}</span>
)

}


                            </div>
                        </div>
                        <div className={inView ?"col-md-5 slide-in-left":"col-md-5"}>
                            <div>
                            {datas?.ContentHeading1 && (

<span className='text-dark  d-block fw-30 fw-bolder ' style={{fontSize:"25px",fontWeight:900}}>{datas?.ContentHeading1}</span>
)

}
{datas?.Contentpara2 && (

<span className='text-dark  d-block fw-25  mt-2 mb-3'>{datas?.Contentpara2}</span>
)

}
{datas?.ContentHeading3 && (
<>

<span className='text-dark  d-inline  fw-30 fw-bolder ' style={{marginRight:"2%"}}><strong>1.</strong></span>
 <span className='text-dark  d-inline fw-30 fw-bolder '>{datas?.ContentHeading3}</span>
</>
)

}
{datas?.list1?.length > 0 && (
  <ul className='mt-2 mb-3'>
    {datas.list1.map((item) => (
      <li className='mt-3 mb-3' key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}

{datas?.ContentHeading4 && (
<>

<span className='text-dark  d-inline  fw-30 fw-bolder ' style={{marginRight:"2%"}}><strong>2.</strong></span>
 <span className='text-dark  d-inline fw-30 fw-bolder '>{datas?.ContentHeading4}</span>
</>
)

}
{datas?.list2?.length > 0 && (
  <ul className='mt-2'>
    {datas.list2.map((item) => (
      <li key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}
{datas?.headingList3 && (
<>

<span className='text-dark  d-inline  fw-30 fw-bolder ' style={{marginRight:"2%"}}><strong>3.</strong></span>
 <span className='text-dark  d-inline fw-30 fw-bolder '>{datas?.headingList3}</span>
</>
)
}
{datas?.list3?.length > 0 && (
  <ul className='mt-2'>
    {datas.list3.map((item) => (
      <li key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}


{datas?.headingList4 && (
<>

<span className='text-dark  d-inline  fw-30 fw-bolder ' style={{marginRight:"2%"}}><strong>4.</strong></span>
 <span className='text-dark  d-inline fw-30 fw-bolder '>{datas?.headingList4}</span>
</>
)
}
{datas?.list4?.length > 0 && (
  <ul className='mt-2 mb-3'>
    {datas.list4.map((item) => (
      <li key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}



{datas?.headingList5 && (
<>

<span className='text-dark  d-inline  fw-30 fw-bolder ' style={{marginRight:"2%"}}><strong>5.</strong></span>
 <span className='text-dark  d-inline fw-30 fw-bolder '>{datas?.headingList5}</span>
</>
)
}
{datas?.list5?.length > 0 && (
  <ul className='mt-2'>
    {datas.list5.map((item) => (
      <li key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}


{datas?.headingList6 && (
<>

<span className='text-dark  d-inline  fw-30 fw-bolder ' style={{marginRight:"2%"}}><strong>6.</strong></span>
 <span className='text-dark  d-inline fw-30 fw-bolder '>{datas?.headingList6}</span>
</>
)
}
{datas?.list6?.length > 0 && (
  <ul className='mt-2'>
    {datas.list6.map((item) => (
      <li key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}



{datas?.headingList7 && (
<>

<span className='text-dark  d-inline  fw-30 fw-bolder ' style={{marginRight:"2%"}}><strong>7.</strong></span>
 <span className='text-dark  d-inline fw-30 fw-bolder '>{datas?.headingList7}</span>
</>
)
}
{datas?.list7?.length > 0 && (
  <ul className='mt-2'>
    {datas.list7.map((item) => (
      <li key={item.id}>
        <span className='fw-25 fw-bolder text-dark'><strong>{item.listpara}</strong></span> <span className='fw-25 text-dark'>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}


{/* Ui UX  */}
{datas?.UiUxlist?.length > 0 && (
  <ul className='mt-2'>
    {datas.UiUxlist.map((item) => (
      <li key={item.id}>
         <span className='fw-25 text-dark mt-3 mb-3' style={{lineHeight:"33px"}}>{item.listspan}</span>
      </li>
    ))}
  </ul>
)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
