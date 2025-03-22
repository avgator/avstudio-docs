self.onmessage=async e=>{const{data:o}=e;for(const r of o)try{fetch(r,{method:"GET"})}catch(a){console.warn(`Error Image pre-caching ${r}:`,a)}};
