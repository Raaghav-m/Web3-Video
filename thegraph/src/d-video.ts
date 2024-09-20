import { VideoUploaded as VideoUploadedEvent } from "../generated/DVideo/DVideo";
import { BigInt } from "@graphprotocol/graph-ts"; // Ensure Bytes is imported
import { VideoUploaded } from "../generated/schema";

export function handleVideoUploaded(event: VideoUploadedEvent): void {
  let entity = VideoUploaded.load(
    generatedId(
      event.params.id.toString(),
      event.params.hash,
      event.params.title
    )
  );
  if (!entity) {
    entity = new VideoUploaded(
      generatedId(
        event.params.id.toString(),
        event.params.hash,
        event.params.title
      )
    );
  }

  entity.id = event.params.id.toString();
  entity.hash = event.params.hash;
  entity.title = event.params.title;

  entity.save();
}

function generatedId(tokenId: string, hash: string, title: string): string {
  return tokenId + "-" + hash + "-" + title; // Convert hash to hex
}
