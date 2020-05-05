import { FunctionComponent, useState, useMemo, useCallback, useEffect } from "react";

const Potentiometer: FunctionComponent<{
  states: [string, string],
  useDefault?: boolean,
  onChange?: (value: 0|1) => any,
  value?: number,
}> = ({states, useDefault, onChange, value}) => {
  const [state, setState] = useState(value ?? (useDefault ? -1 : 0));
  const rotations = useMemo(() => [-45,45], []);

  useEffect(() => {
    value && setState(value);
  }, [value]);

  const style = useMemo(() => ({
    transform: `rotate(${state >= 0 ? rotations[state] : "0"}deg)`
  }), [states, state]);

  const onClick = useCallback(() => {
    let newState = state+1;
    if (newState >= 2) newState = 0;
    setState(newState);
    if (state !== newState && onChange) onChange(newState as 0|1);
  }, [state, states, onChange]);

  return <section className={`
  bg-gray rounded mb-1 mr-1
  h-40 flex p-3
  `}>
    <div className="flex justify-center items-center">
      <div
      className="
      h-24 w-24 bg-gray-400
      rounded-full
      border-solid border-gray-900 border-2
      shadow-md flex justify-center items-center
      cursor-pointer transition-transform duration-200 ease-in-out
      "
      onClick={onClick}
      style={style}
      >
        <div className="relative w-full h-1">
          <span className="absolute right-1 h-full w-5 bg-gray-900"></span>
        </div>
      </div>
    </div>
    <div className="flex-grow
    flex flex-col justify-between py-3 px-5 items-stretch
    ">
      <div className="flex items-center">
        <span className={`inline-block h-3 w-3 mr-4 transition-color duration-200 ease-in-out rounded-full ${state === 0 ? "bg-green-500" : "bg-gray-700"}`}/>
        <span className="flex-grow"/>
        <span>{states[0]}</span>
      </div>
      <div className="flex items-center">
        <span className={`inline-block h-3 w-3 mr-4 transition-color duration-200 ease-in-out rounded-full ${state === 1 ? "bg-green-500" : "bg-gray-700"}`}/>
        <span className="flex-grow"/>
        <span>{states[1]}</span>
      </div>
    </div>
  </section>
}
export default Potentiometer;