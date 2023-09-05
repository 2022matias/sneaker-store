import ReactPlayer from "react-player";

function Inicio() {
    return (
        <div className="App" style={{ display: "flex", justifyContent: "center" }}>
            <ReactPlayer
                url={require("../../videos/Nike.mp4")}
                width="90%"
                height="100%"
                controls={true}
                playing={true}
                muted={true}
                loop={true}
            />
        </div >
    );
}

export default Inicio;