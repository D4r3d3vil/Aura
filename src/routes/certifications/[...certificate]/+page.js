import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    if(!browser) return 
    let pdfUrl = `/certificates/${params.certificate}.pdf`
    const response = await fetch(pdfUrl, {
            method: 'HEAD' // Use HEAD to fetch headers only for faster response
    });
    if (response.ok) return { pdfUrl } // true if status is in the range 200-299
    throw error(404, 'Not found')
}