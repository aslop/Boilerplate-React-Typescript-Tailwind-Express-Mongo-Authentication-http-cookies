import { useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_ROOT_API_URL}/shouldBeAuthed`,

        {
          withCredentials: true,
        }
      );

      console.log(data);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="p-6">
      <div>Home, should be accesible only if you are logged in</div>
    </div>
  );
};
