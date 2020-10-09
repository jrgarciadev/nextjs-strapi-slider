import { gql } from '@apollo/client';

export interface UploadFile {
  id: string;
  name?: string;
  caption?: string;
  url: string;
  ext?: string;
  mime?: string;
}

export const uploadFileFragment = gql`
  fragment uploadFileInfo on UploadFile {
    id
    name
    caption
    url
    ext
    mime
  }
`;
