import React from 'react'
import "./Maps.css"

export default function Maps() {
  return (
    <div className='mapa'>
        
        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13397.279257222326!2d-68.80747508409952!3d-32.91614760416651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0d933c51dc1f%3A0x580da28e39cd8554!2sMOLA%20bar!5e0!3m2!1ses-419!2sar!4v1682535936532!5m2!1ses-419!2sar"}
         width={"600"}
          height={"450"}
           style={{border:"0"}}
            allowFullScreen={false} 
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
