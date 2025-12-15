import pytest
from unittest.mock import patch, MagicMock
from backend.app import create_app

# This reduces redundancy in the other test files by establishing the reusable client fixture
# Resource used: https://coderivers.org/blog/python-unittest-magicmock/

@pytest.fixture
def client():
    with patch("backend.app.create_mongo_client") as mock_client:
        mock_pets_collection = MagicMock()
        mock_pet = {
            "_id": "12345",
            "name": "Ruby",
            "species": "Fish",
            "age": 1,
        }

        mock_pets_collection.find.return_value = [mock_pet]

        mock_db = MagicMock()
        mock_db.__getitem__.return_value = mock_pets_collection

        mock_client.return_value = MagicMock(__getitem__=MagicMock(return_value=mock_db))

        app = create_app()
        app.testing = True
        with app.test_client() as client:
            yield client

# Sample data to check mergeSort with
@pytest.fixture
def mock_pets(): 
    return [
        {"name": "Tofupup", "daysWaiting": 366},
        {"name": "Chepe", "daysWaiting": 2},
        {"name": "Actioncat", "daysWaiting": 1},
        {"name": "Grand Jury", "daysWaiting": 1001}
    ]