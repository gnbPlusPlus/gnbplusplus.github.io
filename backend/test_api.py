def test_get_pets(client):
    response = client.get("/api/pets")
    assert response.status_code == 200

    data = response.get_json()
    assert isinstance(data, list)

    assert "name" in data[0]
    assert "species" in data[0]

