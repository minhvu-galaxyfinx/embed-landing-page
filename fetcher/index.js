const strapiToken = "Bearer 8ebfe56bd9b3e2002a5b8d849b259536371b240738b074d5355fb3807686573b8f5232a5f342aee8b457cbea9b58eac82e0dacbc0255fb991c506220522d993fa40c419a98da5553feb930672f630bdd9982b18fde381aed53ab51d06d8a98560c45ef6c766f2e8bb7e467ac3e2232de5ddc33180c46d7687e57fb738889698b"

export async function getRequest(url) {
    try {
        // Set up the headers
        const headers = {
            'Content-Type': 'application/json',
        };

        // If a token is provided, add the Authorization header
        headers['Authorization'] = strapiToken;


        // Make the fetch request with the headers
        const response = await fetch(url, { headers });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response data as JSON
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}