import { PinataSDK } from "pinata-web3";
import { useWriteContract } from "wagmi";
import DVideo from "../../abi/DVideo.json";

const pinataJWT = import.meta.env.VITE_PINATA_JWT;
const pinataGateway = import.meta.env.VITE_PINATA_GATEWAY;

const pinata = new PinataSDK({
  pinataJwt: pinataJWT,
  pinataGateway: pinataGateway,
});
export async function uploadToIpfs(buffer, title) {
  try {
    const blob = new Blob([buffer], { type: "video/mp4" });
    const file = new File([blob], title, { type: "video/mp4" });

    const upload = await pinata.upload.file(blob);
    const metaData = {
      title: title,
      time: new Date().toISOString(),
      videoUrl: upload.IpfsHash,
    };
    const uploadMetadata = await pinata.upload.json(metaData);

    await useWriteContract({
      abi: DVideo,
      address: "0xA40C285Cf1F235d3b9B49A71BD0D43656de54282",
      functionName: "uploadVideo",
      args: [uploadMetadata.IpfsHash, title],
    });
    return uploadMetadata.IpfsHash;
  } catch (error) {
    console.log(error);
  }
}
