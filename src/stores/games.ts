import { defineStore } from "pinia";
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useGamesStore = defineStore("games", () => {
  const games = ref(
    useQuery(gql`
      query GamesQuery {
        games {
          id
          title,
          platform
        }
      }
    `)
  );

  return { games };
});
