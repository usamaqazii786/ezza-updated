
// import React, { useState } from 'react';
// import { Range } from 'react-range';

// const InputRange = () => {
//   const [values, setValues] = useState<number[]>([50]);
//   return (
//     <>
//       <Range
//         step={0.1}
//         min={0}
//         max={100}
//         values={values}
//         onChange={(newValues) => setValues(newValues)}
//         renderTrack={({ props, children }) => (
//           <div
//             {...props}
//             style={{
//               ...props.style,
//               height: '6px',
//               width: '100%',
//               backgroundColor: '#ff1939',
//             }}
//           >
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div
//             {...props}
//             style={{
//               ...props.style,
//               height: '20px',
//               width: '20px',
//               backgroundColor: '#ff1939',
//               borderRadius: '50px',
//               outline: 'none'
//             }}
//           />
//         )}
//       />

//     </>
//   );
// };

// export default InputRange;


"use client"
import { getTrackBackground, Range } from "react-range";
// prop type 
type IProps = {
  STEP:number;
  MIN:number;
  MAX:number;
  values:number[];
  handleChanges: (val: number[]) => void
}
const InputRange = ({ STEP, MIN, MAX, values, handleChanges }:IProps) => {
  return (
    <>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => handleChanges(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            key='track'
            style={{
              ...props.style,
              height: '3px',
              width: '100%',
              background: getTrackBackground({
                values: values,
                colors: ["#EBEFF4", "rgba(16,100,102,1)", "#EBEFF4"],
                min: MIN,
                max: MAX
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props,index }) => (
          <div
            {...props}
            key={`thumb-${index}`}
            style={{
              ...props.style,
              height: '17px',
              width: '5px',
              backgroundColor: "rgba(16,100,102,1)",
              outline: "none"
              
            }}
          />
        )}
      />
    </>
  );
};


export default InputRange;