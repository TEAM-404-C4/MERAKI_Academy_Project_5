import React from 'react'

export default function FeedBack() {
  return (
    <div className="FeedBack">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Subject" />
        <textarea type="text" placeholder="Message"/>
<button>Submit</button>
    </div>
  )
}
