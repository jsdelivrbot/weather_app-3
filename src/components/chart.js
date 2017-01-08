//first decide whether to create a component or container; then decide whether to create it class-based or functional
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
        <div>{average(props.data)} {props.units}</div>
      </Sparklines>
    </div>
  );
}
