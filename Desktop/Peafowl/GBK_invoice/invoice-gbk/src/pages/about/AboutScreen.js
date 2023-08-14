import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            
          </div>

          
          <div className="mt-2 pl-4 text-sm">
            
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:gbkflowers@gmail.com"
                className="underline cursor-pointer"
              >
                gbkflowers@gmail.com
              </a>{" "}
              (or){" "}
              
            </div>
            <div>
              <span>🎁 </span>
              
            </div>
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
           SONU BABU T
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <h1>tsonubabu0@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
