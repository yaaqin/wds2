import React from 'react'

export default function Maps() {
  return (
    <div className="w-full h-[50vh] my-[32px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.9631283394186!2d106.661314!3d-6.2767371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf3c6dd2ab9%3A0x17b956000888dac0!2sPT.%20Wahana%20Data%20Solusindo!5e0!3m2!1sen!2sid!4v1695402097562!5m2!1sen!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      title="Google Map PT. Wahana Data Solusindo"
    ></iframe>
  </div>
  )
}
