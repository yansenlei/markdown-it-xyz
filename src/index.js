const xyzPlugin = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    if (token.info === 'xyz') {
      const code = token.content.trim()
      try {
        // const json = JSON.parse(code)
        console.log('idx', idx)
        const id = `xyz-blockid-${idx}-${parseInt(Math.random() * 1000)}`
        return `<div id="${id}" class="xyz-block" xyz-data="${code}" style="width: 400px;height: 400px;border: 1px solid #eee; position: relative; margin: 5px; overflow: auto;">${code}</div>`
      } catch (e) { // JSON.parse exception
        return `<pre>${e}</pre>`
      }
    }
    return temp(tokens, idx, options, env, slf)
  }
}

export default xyzPlugin
