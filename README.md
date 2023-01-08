# Soccer Championship
### Campeonato de Futebol Online

Idealizado por Nicolas Perejon

## 2 Modos de Jogo

### Fases de Grupo
season-[number].json

```json
{
    "hasGroups": true,
    "groups": ["A", "B", "C"],
    "rounds": [
        {
            "round_num": 1,
            "date": "00/00/2023",
            "group": "A",
            "matches": [
                {
                    "team_1": {
                        "id": 1,
                        "score": -1
                    },
                    "team_2": {
                        "id": 8,
                        "score": -1
                    },
                    "rec_url": "http::rec",
                    "score": [
                        {
                            "player_id": 1,
                            "gols_num": 10,
                            "against": 0
                        }
                    ]
                }
            ]
        }
    ]
}
```

### Pontos Corridos
season-[number].json

```json
{    
    "hasGroups": false,
    "groups": [],
    "rounds": [
        {
            "round_num": 1,
            "date": "00/00/2023",
            "matches": [
                {
                    "team_1": {
                        "id": 1,
                        "score": -1
                    },
                    "team_2": {
                        "id": 8,
                        "score": -1
                    },
                    "rec_url": "http::rec",
                    "score": [
                        {
                            "player_id": 1,
                            "gols_num": 10,
                            "against": 0
                        }
                    ]
                }
            ]
        }
    ]
}
```

### Eliminatórias
season-[number].json

- A implementação de rodadas não é obrigatória.

```json
{   
    "hasRounds": false,
    "hasQualifiers": true,
    "qualifiers": [
        {
            "name": "Quartas de Final",
            "date": "00/00/2023",
            "matches": [
                {
                    "team_1": {
                        "id": 1,
                        "score": -1
                    },
                    "team_2": {
                        "id": 8,
                        "score": -1
                    },
                    "rec_url": "http::rec",
                    "score": [
                        {
                            "player_id": 1,
                            "gols_num": 10,
                            "against": 0
                        }
                    ]
                }
            ]
        }
    ]
}