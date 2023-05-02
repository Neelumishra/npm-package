export async function PackageSearch(query) {
    const data=await fetch(`https://api.npms.io/v2/search?q=${query}`)
    const resp=await data.json()
    
    
  
}
