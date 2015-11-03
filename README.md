# VCR [![Build Status](https://travis-ci.org/ys/vcr.svg?branch=master)](https://travis-ci.org/ys/vcr)

Use json based cassettes to playback http queries.

![](https://upload.wikimedia.org/wikipedia/commons/6/67/VHS-cassette.jpg)

## Usage

```
vcr = require('vcr')
...
vcr.playback()
vcr.play('jurassic_park.vhs')
vcr.stop()
```

### vcr.playback()

This will block all connections with `nock`

### vcr.play()

This will mock connections to a certain endpoint

### vcr.stop()

This will reallow connections

## VHS format

```
module.exports.cassettes = {
  'imdb rating post': {
    'host': 'https://api.imdb.com',
    'path': '/',
    'method': 'post',
    'body': { 'jurassicPark': { 'rating': '💕'}},
    'code': 200
  }
}
```
