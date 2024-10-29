/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchFeed = () => {
  const [feedData, setFeedData] = useState({});

  const fetchFeedAPI = async () => {
    // try {
    //   const response = await axios.get(
    //     "https://www.swiggy.com/mapi/homepage/getCards?lat=9.91850&lng=76.25580"
    //   );
    //   console.log(response);

    //   const data = await response.json();
    //   setFeedData(data);
    //   console.log(data);
    // } catch (err) {
    //   console.log("error fetching data");
    // }

    fetch("https://www.meesho.com/api/v1/products/filterConfig", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language":
          "en-IN,en;q=0.9,hi-IN;q=0.8,hi;q=0.7,en-GB;q=0.6,en-US;q=0.5",
        Cookie:
          "ANONYMOUS_USER_CONFIG=j%3A%7B%22clientId%22%3A%22970dda30-9cae-4bed-9234-7c7a973f%22%2C%22instanceId%22%3A%22970dda30-9cae-4bed-9234-7c7a973f%22%2C%22xo%22%3A%22eyJ0eXBlIjoiY29tcG9zaXRlIn0%3D.eyJqd3QiOiJleUpvZEhSd2N6b3ZMMjFsWlhOb2J5NWpiMjB2ZG1WeWMybHZiaUk2SWpFaUxDSm9kSFJ3Y3pvdkwyMWxaWE5vYnk1amIyMHZhWE52WDJOdmRXNTBjbmxmWTI5a1pTSTZJa2xPSWl3aVlXeG5Jam9pU0ZNeU5UWWlmUS5leUpwWVhRaU9qRTNNamswTXpjMU9EUXNJbVY0Y0NJNk1UZzROekV4TnpVNE5Dd2lhSFIwY0hNNkx5OXRaV1Z6YUc4dVkyOXRMMmx1YzNSaGJtTmxYMmxrSWpvaU9UY3daR1JoTXpBdE9XTmhaUzAwWW1Wa0xUa3lNelF0TjJNM1lUazNNMllpTENKb2RIUndjem92TDIxbFpYTm9ieTVqYjIwdllXNXZibmx0YjNWelgzVnpaWEpmYVdRaU9pSXhaV013WldFeVpDMDJaVFUzTFRSbU0yRXRZVFF6WlMwNE5UTTBaVFl4T0RCa1lXUWlmUS5hdC03TEtUeExxZkktTE5oYTVrSFg4VTMyUU1mLVFuMzQ5aU9uazJ2bURzIiwieG8iOm51bGx9%22%2C%22createdAt%22%3A%222024-10-20T15%3A19%3A44.830Z%22%7D; CAT_NAV_V2_COOKIE=0.11654547679832405; ak_bmsc=3B6FC049027A3B885DC41333A574721F~000000000000000000000000000000~YAAQhXEsMaVESG+SAQAA/UYTvxns3/PCZquEWhVi+TuBIEaJYJ2m6LHKJhdd7Gz8qM7/Aaf45fdOsZ4D2NU96PU7nJ5/S7bAQzt4wUSL9rJtkQzN8zeK4ebwTGDHLbbep8vnoGEAZgVmrtju0KQ1SHbHrYxP2EmyQI73JGDOs9O6wLQwXiVP74QTPyAkH68jTG6iN77J85SgUD99/tBodOY2ovplc1UvOYZOzIYstKW3HOXmJWmizy6KIG8xlSeQ6Bh78D18pXcAxH0gveHhN4m4wuBXSgw/LAAO8GTUypr+xehgTIslaTZG7QVC1qBDt43ntodTG/mHD/mHM08ddWVbsMCpzON1rhF34wpt6HUIDaG/k4CWJ/HibHRbdE365oOxSjvLNEp5fqQVNd8IZz0SkU6Ec4faAjQbUe6KT94JT6vN+3RqXudfsWxkrv8nOxWPIFqOF1gycEJzpJL+qJbrYpkYpDHjTaE39WeVDSTlnw0YlZSOkt52YN17u8/oOB1hFkDJ; isDownloadCta=false; __logged_in_user_id_=89903475; _is_logged_in_=1; __connect.sid__=s%3AalkQeQYXENpCpP0CpfQHe8lKOqDl1Bey.7HWT%2FqKdGtdevE15um%2FZheFYRYDSrCZURzogrGLNCEs; location-details=%7B%22city%22%3A%22Mushahari%22%2C%22pincode%22%3A%22842001%22%2C%22lat%22%3A%2225.4316%22%2C%22long%22%3A%2287.4771%22%2C%22address_id%22%3A%22300459108%22%7D; _abck=0A0AFBBE3D05184D90532B0910B07746~0~YAAQn3EsMT6hwHuSAQAA/kBKvwxV3UTzwqCr9kVhKNXWKz3aOOs5oAavTnLxCK3xoMy2pC2kV/kNfNvn8JMBrG9NEu+8mzj73s2GpPQQnTta4dwMGZxgFlEUxlTWQCflLLBHhdR1OFYpf6awgFf+tfKU7IaqOddfUOJ7z10edEkyTlyXAnxJiUVrc5tO49gRrlxfSym1AP257qXkGqm99tSTlyk1UM+GvkevO/jHcd9DmH6mOvdMgkjRwNRQgZDfNsipgbNRbnbHTzjAXlTWMjCqZE2B6wDxAY+o2lGpwrA70howDKeAB/leomDW4rHb8SDOdq7LMAbKaclNnLAnRwBmIQvYUMsEX5pg3LUEq9/6TXcjCFcS6CUx8b0YM0sm/IS5Qk6RYAGjDF68+Y05inuUxSMl6QWkDJSRjx5ZZH45l6a0XrBFcvkWbf/i8868PFly7qtFHEv1aEqv6MGMK6C71fj3sInmHmt7Z9k2SdIMdUL9EyYTQ8LPVoc2Wjbdbr2+0mHGxy1kR8dXAnMCvkpNjVRk2AjYkzFicZbNJJoOQs5vaMPpZZPL8tWYnPBxUSpf2P4J5gk4SyjYwVjHkC/AWOgF3iEyffkCpqxwRU0oYCRcr+4zz14E9GUNjS1pk7njG/9P9zQyTv5lrd9d/CdJ24pFLaZGtjYKW5zE1WQIqBbZOIxfgw9F1PTOZR6rNA==~-1~-1~1729789767; mp_60483c180bee99d71ee5c084d7bb9d20_mixpanel=%7B%22distinct_id%22%3A%20%22191dd0ee8e0961-0c0201c2aafc27-17525637-13c680-191dd0ee8e12b4e%22%2C%22%24device_id%22%3A%20%22191dd0ee8e0961-0c0201c2aafc27-17525637-13c680-191dd0ee8e12b4e%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%22191dd0ee8e0961-0c0201c2aafc27-17525637-13c680-191dd0ee8e12b4e%22%2C%22Is%20Anonymous%22%3A%20%22False%22%2C%22Session%20ID%22%3A%20%22a0f7d584-16c6-48d4-9998-22bc733d%22%2C%22V2%20Cat-Nav%20Exp%20Enabled%22%3A%20true%2C%22last%20event%20time%22%3A%201729787583590%2C%22Instance_Id%22%3A%20%22970dda30-9cae-4bed-9234-7c7a973f%22%2C%22__alias%22%3A%2089903475%7D; isWG=false; bm_sv=2C0E116E17ED251A1FE298A752B42B96~YAAQbOhUuJE8KWmSAQAAdxFgvxkvE/X5LPl4cAmmNqIrB2ODHCBGxZAs5ryQy5odW+UMj+QubiRf76p6BEy6MyaR28ZKaqQ1vO8zzSBj0BzHKShWgjSK2wcCCQ37pIsiqDIjvxFGFRPhIiInA9Kv06UemFhb8M5bkwOy/ZPaU5KsK/m8z0/yomMYnlZNcsXCSVXMPMWWhmnred4FVGy882WfE+Hj6akkKaEIfEmXaYb2GvGgvsnpqCD8HtSuirOfEw==~1; bm_sz=CDB2029CB354177329991076918EE65F~YAAQbOhUuJI8KWmSAQAAdxFgvxl8+RKLDIOQZqQVsoO3nSX6Vczt+4r4GGciFGopn5OUVgtp1O2oKLD3bzyj+VsMwSb0zFQyTXtZm2AXJZmJmIqeFzh/37pYiDujUsQs7mMROM6lc0F/SeZ9QL2ROqNgIuN4QmZ3T1/n/XqVGg8XGX1VN473KS318ArFNWQ8qN8Gpw2szKoYN7mY2IEfagq2jYW8ceDYhy2VtjEZUmWjAD26gqoM1ejFFp0lXw5LOUT8VyX6ZH3FC032UwBzMSC5PJnHdau0NSWnZAQTlT85PprrG6p5U/TTA3Nk+EidfqdBkJmrRiR2lgWAy4yAEXiBHJLypcFQ4Jb82B8SCZO8dTQN0gX2Zd8cIvjxlSOFVmO4kDsmk3NZmmidsC4LfbZfWocuI1jkkoYfI+c57S6NUhyExlwEaZvUgjLWwA6/vMSBERVxQMS6m5blin4JamZJjfz3mw8KHuNOHqxOpRSxjByLZ5ZOfaiHYzqOU3bOgBpAdWhkeCZBxrCS~3225155~3682865",
      },
      body: JSON.stringify({
        page_id: "3ja",
        type: "plp_listing",
        requestDetails: null,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchFeedAPI();
  });
  return (
    <div>
      <p>dii</p>
      <p>dii</p>
    </div>
  );
};
export default FetchFeed;
