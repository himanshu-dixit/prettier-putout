#!/usr/bin/env zx
const {PRETTIER_DIR, PUTOUT_DIR,GITHUB_WORKSPACE}= process.env

console.log({PRETTIER_DIR, PUTOUT_DIR})

for(let dir of PRETTIER_DIR.split(" ")){
    const dirPath = `${GITHUB_WORKSPACE}/${dir}`;
    await `cd ${dirPath} && npx prettier --write . `
}

for(let dir of PUTOUT_DIR.split(" ")){
    const dirPath = `${GITHUB_WORKSPACE}/${dir}`;
    await `cd ${dirPath} && npx putout --fix . `
}

