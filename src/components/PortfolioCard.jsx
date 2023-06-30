import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import defaultimg from "../assets/ecommerce.png";
import { MdOutlineCancel } from "react-icons/md";
import { Chip } from "@mui/material";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const PortfolioCard = ({
  bgpic,
  title,
  short_des,
  description,
  tech_used,
  website,
  git_repo,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" bg-white h-72 relative rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div
        className="h-full -z-1 w-full md:bg-contain bg-cover bg-no-repeat justify-center flex items-center flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${
            bgpic || defaultimg
          })`,
        }}
      >
        <div className="absolute inset-0 z-1 bg-black text-center flex flex-col items-center justify-center opacity-100 bg-opacity-60 duration-300 space-y-4 p-4">
          <h1 className="text-white font-extrabold text-xl md:text-2xl">
            {title}
          </h1>
          <p className="text-sm md:text-base">{short_des}</p>
          <button
            onClick={handleOpen}
            className="py-1 px-2 text-sm  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white font-semibold rounded-md"
          >
            Know More
          </button>
          <div className="flex-wrap flex gap-3 justify-center items-center w-full md:w-2/3">
            {tech_used.map((tech, index) => (
              <div
                key={index}
                className=" bg-transparent text-[0.65rem] md:text-xs text-white font-bold border px-1 md:px-2 md:py-2 rounded-2xl"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <a className="absolute inset-0 z-10 bg-gray-500 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
          <h1 className="text-black">Title</h1>
          <p class="mx-auto">Description</p>
        </a>
        <a href="#" class="relative">
          <div className="h-full  content-center">
            <img src={friendcardsg} className="mx-auto " alt="" />
          </div>
        </a>
      </div> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        {/* <Box sx={style}> */}
        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Government Law College Placement Website
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        {/* </Box> */}
        <div className="p-3 bg-white h-2/3 md:w-2/3 ">
          <h1 className="flex justify-between text-xl p-2 md:text-2xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500">
            {title}
            <button className=" pt-2" onClick={handleClose}>
              <MdOutlineCancel className=" text-xl mb-2" />
            </button>
          </h1>
          <div
            // className="bg-white m-5 md:m-0 md:w-1/2 h-3/4 md:h-5/6 xl:h-7/8 p-5 md:pt-10 pt-36 flex flex-col space-y-6 justify-center overflow-scroll"
            className="bg-gray-50 border relative h-5/6 overflow-y-scroll"
          >
            <div className=" ">
              <div className="space-y-8 p-5">
                <div className="text-base">
                  <h1 className="font-semibold">Description:</h1>
                  <p>{description}</p>
                </div>
                <div className=" text-base">
                  <h1 className="font-semibold">Technologies used :</h1>
                  <div className="grid grid-cols-2 auto-rows-auto">
                    {tech_used.map((tech, index) => (
                      <li key={index} className="font-bold text-blue-600">
                        {tech}
                      </li>
                    ))}
                  </div>
                </div>
                {website ? (
                  <div className="text-base">
                    <h1 className="font-semibold">Visit website:</h1>
                    <a
                      href={website}
                      rel="noreferrer"
                      target="_blank"
                      className="font-semibold text-blue-600 underline-blue-600 underline underline-offset-4"
                    >
                      {title}
                    </a>
                  </div>
                ) : null}
                {git_repo ? (
                  <div className="text-base">
                    <h1 className="font-semibold">Github Repository:</h1>
                    <a
                      href={git_repo}
                      rel="noreferrer"
                      target="_blank"
                      className="font-semibold text-blue-600 underline-blue-600 underline underline-offset-4"
                    >
                      {git_repo}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioCard;
