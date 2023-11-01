import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LoginModal = ({ hideLoginModal }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "30%" }}>
        <header
          style={{
            backgroundColor: "#39c",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5%",
            borderRadius: "0.5rem 0.5rem 0 0",
          }}
        >
          <h3>Login / Register</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => hideLoginModal(false)}
            style={{cursor:"pointer"}}
          />
        </header>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "8%",
            backgroundColor: "#fff",
            borderRadius: "0 0 0.5rem 0.5rem",
            gap: "1.5rem",
          }}
        >
          <input
            type="tel"
            name=""
            id=""
            placeholder="Enter Mobile Number"
            style={{
              padding: "3%",
              borderRadius: "0.25rem",
              border: "1px solid #bbb",
            }}
            required
          />
          <button
            style={{
              padding: "3%",
              borderRadius: "0.25rem",
              border: "none",
              backgroundColor: "#e4252a",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            PROCEED
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
