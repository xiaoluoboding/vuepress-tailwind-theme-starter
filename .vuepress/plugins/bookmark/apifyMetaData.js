const ApifyClient = require('apify-client')

const apifyClient = new ApifyClient({
  userId: 'aBiK4hymWp4K2LiZc',
  token: 'dhMoBHTwdc6J36aifJ77L9E7x'
})

const keyValueStores = apifyClient.keyValueStores

const apifyMetaData = async (urls = []) => {
  let metadata = []
  // Awaited promise
  try {
    await apifyClient.acts.runAct({
      actId: '8xlX2NQerxiadEAUl',
      token: 'dhMoBHTwdc6J36aifJ77L9E7x',
      body: JSON.stringify({ urls }),
      contentType: 'application/json; charset=utf-8'
    })
    // console.log(actors)
    console.log('run actors successfully')
    // Awaited promise
    try {
      const store = await keyValueStores.getOrCreateStore({ storeName: 'metainfo' })
      apifyClient.setOptions({ storeId: store.id })
      const res = await keyValueStores.getRecord({ key: 'meta' })
      metadata = res.body
      // Do something record ...
    } catch (err) {
      console.log(err)
      // Do something with error ...
    }
    // Do something actors list ...
  } catch (err) {
    console.log(err)
    // Do something with error ...
  }
  return metadata
}

module.exports = apifyMetaData
