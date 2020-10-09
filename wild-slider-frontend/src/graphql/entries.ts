import { gql } from '@apollo/client';
import { UploadFile, uploadFileFragment } from './fragments/uploadFile';

export interface Entry {
  id: string;
  coverImage: UploadFile;
  caption: string;
}

export const ALL_ENTRIES_QUERY = gql`
  query allEntries {
    entries {
      id
      coverImage {
        ...uploadFileInfo
      }
      caption
    }
  }
  ${uploadFileFragment}
`;
