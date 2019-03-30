import gql from "graphql-tag";

export const nicknamesall = gql`{
        nicknames{
          name
          id
        }
}`;

export const joinnickname = gql`
    mutation($name: String!) {
        insert_nicknames(
            objects: [
                {
                  name: $name,
                }
              ]
        ){
            affected_rows
          }
    }
`;