<script>
    
async function run(){
    const locations = await getBusLocations();
    console.log(new Date());
    console.log(locations);

    // timer - less than 15 second calls can get you banned for trying to crash server
    setTimeout(run, 15000);
}

async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}

run()

</script>