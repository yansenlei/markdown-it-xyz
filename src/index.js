const xyzPlugin = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    if (token.info === 'xyz') {
      const code = token.content.trim()
      try {
        // const json = JSON.parse(code)
        return `<div class="xyz-block" xyz-data="${code}"></div>`
      } catch (e) { // JSON.parse exception
        return `<pre>${e}</pre>`
      }
    }
    return temp(tokens, idx, options, env, slf)
  }
}

export default xyzPlugin
