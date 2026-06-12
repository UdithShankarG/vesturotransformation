# Vesturo Transformation

> AI-powered video prompt generator for palm-sized, mechanically-engineered metallic transformation prototypes.

## What It Does

Enter any subject (animal, vehicle, mythological creature, etc.) and Vesturo generates a hyper-detailed **10-second video prompt** describing:

- A compact geometric metallic **abstract** (palm-sized ~4cm)
- A raw, handheld phone-filmed **scene setup**
- Frame-by-frame **transformation deployment** with real mechanical movements
- **Strict rules** and **negative constraints** for video generation

Every prompt is engineered with real-world physics — no morphing, no magic, just pure mechanical artistry.

## Setup

1. Clone the repo
2. Copy `config.template.js` to `config.js`
3. Add your OpenRouter API key in `config.js`
4. Open `index.html` in a browser

```bash
cp config.template.js config.js
# Edit config.js with your API key
```

## Tech Stack

- Pure HTML / CSS / JavaScript (no frameworks)
- OpenRouter AI API (streaming)
- Model: `openai/gpt-oss-120b:free`

## License

MIT
