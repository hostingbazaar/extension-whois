// Retrieve the current tab's URL
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    const url = tab.url;
    
    // Update the placeholder text with the URL
    const urlPlaceholder = document.getElementById('url-placeholder');
    // console.log(url);
    urlPlaceholder.textContent = url;

    
// Example usage:
const domain = url; // Replace with the domain you want to query
fetchApiData(domain)
  .then(data => {
    // console.log(data);
    // console.log(data.name_servers[0]);
    // document.getElementById("domain_name").innerHTML = data.domain_name[0];
    document.getElementById("registrar").innerHTML = data.registrar;
    document.getElementById("whois_server").innerHTML = data.whois_server;
    document.getElementById("ns1").innerHTML = data.name_servers[0];
    document.getElementById("ns2").innerHTML = data.name_servers[1];
    document.getElementById("emails").innerHTML = data.emails;

    var theDate = new Date(data.expiration_date[0] * 1000);
    dateString = theDate.toGMTString();
    document.getElementById("expiration_date").innerHTML = dateString;

    var theDates = new Date(data.updated_date[0] * 1000);
    dateStrings = theDates.toGMTString();
    document.getElementById("updated_date").innerHTML = dateStrings;

    // Process the API response data here
  });

  });
  

  const apiUrl = "https://api.api-ninjas.com/v1/whois";
const apiKey = "vzOXgXDGVJPv/qqZLXomJw==wg4d6hgwV0sei0U2";

// Function to fetch the API data with parameters
async function fetchApiData(domain) {
  const url = `${apiUrl}?domain=${encodeURIComponent(domain)}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": apiKey
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}



  




  