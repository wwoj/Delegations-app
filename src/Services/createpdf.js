import axios from "axios";
import { saveAs } from "file-saver";
export var createAndDownloadPdf = () => {
    axios
      .post(
        "https://excellent-capable-vulcanodon.glitch.me/create-pdf",
        this.state
      )
      .then(() =>
        axios.get("https://excellent-capable-vulcanodon.glitch.me/fetch-pdf", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };