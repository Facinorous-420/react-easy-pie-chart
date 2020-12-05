import React, { useEffect } from 'react'
import './EasyPieLoader.css'

export const EasyPieChart = (props: {percent: number, barColor?: string, trackColor?: string, scaleColor?: unknown, lineCap?: string, lineWidth?: number, size?: number, animate?: number }) => {
  
useEffect(() => {
    (window as any).$(() => {
        (window as any).$('.chart').easyPieChart({
         barColor: props.barColor || "#0000FF",
         trackColor: props.trackColor || "#f2f2f2",
         scaleColor: props.scaleColor || "#dfe0e0",
         lineCap: props.lineCap || "'round",
         lineWidth: props.lineWidth || 3,
         size: props.size || 110,
         animate: props.animate || 1000,
       })
     })
  }, [])

      return (
      <>
        <div className="chart" data-percent={props.percent}><span>{props.percent}%</span></div>
      </> 
    )
}
