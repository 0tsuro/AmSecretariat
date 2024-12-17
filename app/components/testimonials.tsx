"use client";

import React from "react";

const Testimonials = () => {
  return (
    <section className="pink p-8 text-center rounded-3xl shadow-md mt-12">
      <h2 className="text-3xl font-bold mb-4 text-black">
        🌟 Nos clients sont satisfaits !
      </h2>
      <p className="text-xl mb-6 text-black">
        <strong className="text-blue-600">4.7/5</strong> sur{" "}
        <span className="hover:text-grey-700">
          <a href="https://www.google.com/search?rlz=1C1CHBF_enFR1126FR1126&udm=1&q=Centre%20de%20Formation%20aux%20Métiers%20de%20la%20Santé%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2sTQwMzA0NTU3NLUwNzc2MzE128DI-IrRyDk1r6QoVSElVcEtvyg3sSQzP08hsbRCwffwypLM1KJikExOokJwYl7J4ZUKjmWZxYtYydAEAMd-DGKEAAAA&rldimm=4906015571587736456&tbm=lcl&cs=1&hl=fr&sa=X&ved=0CB0Q9fQKKABqFwoTCPjetuq_r4oDFQAAAAAdAAAAABAH&biw=1920&bih=991&dpr=1#lkt=LocalPoiReviews">
            {" "}
            Google Avis
          </a>
        </span>
      </p>
    </section>
  );
};

export default Testimonials;
