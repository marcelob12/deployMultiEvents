import QRCode from "react-qr-code"
const QrCode = ({value}) => {
    return (
        <div style={{ height: "100%", margin: "0 auto", maxWidth: 200, width: "100%" }}>
        <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" ,bgColor: "#090979"}}
        value={value}
        viewBox={`0 0 256 256`}
        />
    </div>
    )
   
}

export default QrCode