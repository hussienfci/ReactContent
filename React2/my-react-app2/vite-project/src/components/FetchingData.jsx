// export default async function FetchingData(){
//     const resp = await fetch(
//         `https://demandapi.booking.com/3.1/common/locations/cities`,
        
//         {
//           method: 'POST',
          
//           headers: {
//             'Content-Type': 'application/json',
//             'X-Affiliate-Id': '0',
//             // Authorization: 'Bearer <YOUR_string_HERE>'
//             mode:'no-cors', 
//         },
//           body: JSON.stringify({
//             country: 'nl',
//             languages: ['en-gb']
//           })
//         }
//       );
      
//       const data = await resp.json();
//       console.log(data);
// }