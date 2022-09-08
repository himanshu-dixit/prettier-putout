#!/usr/bin/env zx
const {PRETTIER_DIR, PUTOUT_DIR,GITHUB_WORKSPACE}= process.env

const data = await $`ls -la`;


for(let dir of PRETTIER_DIR.split(" ")){
    const dirPath = `${GITHUB_WORKSPACE}/${dir}`;
    console.log(`cd ${dirPath} && npx prettier --write . `)
    await $`cd ${dirPath} && npx prettier --write . `
}

for(let dir of PUTOUT_DIR.split(" ")){
    const dirPath = `${GITHUB_WORKSPACE}/${dir}`;
    await $`cd ${dirPath} && npx putout . --fix `
}

