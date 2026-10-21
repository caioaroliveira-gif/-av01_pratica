

cliente_router.get("/", async(req, res) => {
  const cliente = await clienteService.getAll()
  return res.json(cliente)
})

cliente_router.post("/", async (req, res) => {
  const cliente = await clienteService.create(req.body)
  return res.status(201).json(cliente)
})