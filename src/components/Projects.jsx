import React from "react";
import images from "../images/kejardosen.jpg";
import { CiLink } from "react-icons/ci";

function Projects() {
  const projectUrl =
    "https://pbl.polibatam.ac.id/pamerin/detail.php?title=aplikasi-penjadwalan-bimbingan-tugas-akhir-&id=MjU1Ng==&ta=NQ==&id_tim=Mjg2Ng==";

  return (
    <div id="projects">
      <div className="projects-container container">
        <h2 className="title">Project</h2>

        <div className="all-items">
          <div className="item">
            <div className="left">
              <div className="img">
                <img src={images} alt="Kejardosen" className="project-img" />
              </div>
            </div>

            <div className="right">
              <h2 className="project-title">PBL TRPL 107 - Kejardosen</h2>
              <h3 className="project-sub-title">
                Aplikasi Penjadwalan Bimbingan Tugas Akhir
              </h3>
              <p className="project-description">
                Aplikasi ini dirancang untuk memfasilitasi penjadwalan dan
                pengelolaan sesi bimbingan antara mahasiswa dan dosen pembimbing
                dalam proses penyusunan tugas akhir.
              </p>
              <div className="buttons">
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  <CiLink />
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
