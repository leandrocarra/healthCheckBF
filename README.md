# Health Check for Black Friday
> Its a simple app to check if main sites are on-line

## Installation

OS X & Linux:

```sh
npm install
```
and then

```sh
npm run dev
```

## Usage example

You can add your favorite sites by adding in the urls object

```js
var urls = {
  'sites': [
    {
      url: 'https://www.magazineluiza.com.br/',
      name: 'Magazine Luiza'
    },
    {
      url: 'https://www.americanas.com.br/',
      name: 'Americanas'
    },
    {
      url: 'https://www.submarino.com.br/',
      name: 'Submarino'
    }
  ]
}
```

## Contributing

1. Fork it (<https://github.com/leandrocarra/healthCheckBF/fork>)
2. Create your feature branch (`git checkout -b feature/example`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/example`)
5. Create a new Pull Request
