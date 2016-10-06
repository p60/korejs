module.exports = {
  "Census": {
    "Answer": {
      "value_type": {
        "name": "value_type",
        "source": "Census::Answer::Fields::ValueType",
        "type": "enum",
        "choices": [
          {
            "source": "Census::Answer::Fields::ValueType::UuidValue",
            "name": "uuid_value",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Census::Answer::Fields::ValueType::TextValue",
            "name": "text_value",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Census::Answer::Fields::ValueType::IntegerValue",
            "name": "integer_value",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Census::Answer::Fields::ValueType::BooleanValue",
            "name": "boolean_value",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Census::Answer::Fields::ValueType::ArrayValue",
            "name": "array_value",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Census::Answer::Fields::ValueType::DecimalValue",
            "name": "decimal_value",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          }
        ],
        "values": [
          "uuid_value",
          "text_value",
          "integer_value",
          "boolean_value",
          "array_value",
          "decimal_value"
        ]
      },
      "custom_fields": {
        "source": "Census::Answer::Fields::CustomFields",
        "name": "custom_fields",
        "type": "struct",
        "fields": {
        }
      },
      "import_data": {
        "source": "Census::Answer::Fields::ImportData",
        "name": "import_data",
        "type": "struct",
        "fields": {
          "imported_at": {
            "name": "imported_at",
            "source": "Census::Answer::Fields::ImportData::Fields::ImportedAt",
            "type": "time"
          },
          "notes": {
            "name": "notes",
            "source": "Census::Answer::Fields::ImportData::Fields::Notes",
            "type": "array"
          },
          "answer_data": {
            "name": "answer_data",
            "source": "Census::Answer::Fields::ImportData::Fields::AnswerData",
            "type": "json"
          }
        }
      },
      "types": [
        "Census::Answers::BooleanAnswer",
        "Census::Answers::MultipleChoiceAnswer",
        "Census::Answers::MultipleChoiceImageAnswer",
        "Census::Answers::MultipleChoiceManyAnswer",
        "Census::Answers::NumberScaleAnswer",
        "Census::Answers::TextAnswer",
        "Census::Answers::RankingAnswer",
        "Census::Answers::WinLossAnalysisWonOrLostAnswer"
      ]
    },
    "Answers": {
      "BooleanAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::BooleanAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::BooleanAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::BooleanAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::BooleanAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::BooleanAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::BooleanAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::BooleanAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::BooleanAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::BooleanAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::BooleanAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::BooleanAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::BooleanAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Answers::PostCaseAreYouSatisfiedAnswer"
        ]
      },
      "MultipleChoiceAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::MultipleChoiceAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::MultipleChoiceAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::MultipleChoiceAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::MultipleChoiceAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer",
          "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer",
          "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer"
        ]
      },
      "MultipleChoiceImageAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::MultipleChoiceImageAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "MultipleChoiceManyAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::MultipleChoiceManyAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer",
          "Census::Answers::PostCaseWhatDidWeDoWellAnswer",
          "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer"
        ]
      },
      "NpsNumberScaleAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::NpsNumberScaleAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::NpsNumberScaleAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "NpsTextAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::NpsTextAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::NpsTextAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsTextAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsTextAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsTextAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsTextAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NpsTextAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::NpsTextAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::NpsTextAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::NpsTextAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::NpsTextAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::NpsTextAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "NumberScaleAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::NumberScaleAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::NumberScaleAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NumberScaleAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NumberScaleAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NumberScaleAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NumberScaleAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::NumberScaleAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::NumberScaleAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::NumberScaleAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::NumberScaleAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::NumberScaleAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::NumberScaleAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Answers::NpsNumberScaleAnswer",
          "Census::Answers::WinLossAnalysisLossRateExperienceAnswer"
        ]
      },
      "PostCaseAreYouSatisfiedAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::PostCaseAreYouSatisfiedAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "PostCaseWhatCouldWeHaveDoneBetterAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::PostCaseWhatCouldWeHaveDoneBetterAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "PostCaseWhatDidWeDoWellAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::PostCaseWhatDidWeDoWellAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "RankingAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::RankingAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::RankingAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::RankingAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::RankingAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::RankingAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::RankingAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::RankingAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::RankingAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::RankingAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::RankingAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::RankingAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::RankingAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::RankingAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "TextAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::TextAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::TextAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::TextAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::TextAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::TextAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::TextAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::TextAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::TextAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::TextAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::TextAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::TextAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::TextAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Answers::NpsTextAnswer",
          "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer"
        ]
      },
      "WinLossAnalysisLossRateExperienceAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::WinLossAnalysisLossRateExperienceAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisLossReasonForNotPurchasingAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::WinLossAnalysisLossReasonForNotPurchasingAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::WinLossAnalysisLossWhichCompetitorWouldYouChooseAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWinFeatureExcitementAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::WinLossAnalysisWinFeatureExcitementAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "reasons": {
              "name": "reasons",
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::CustomFields::Fields::Reasons",
              "type": "json"
            }
          }
        },
        "import_data": {
          "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::WinLossAnalysisWinReasonForChoiceOverCompetitionAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWinWhoIsBestContactAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::WinLossAnalysisWinWhoIsBestContactAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWonOrLostAnswer": {
        "value_type": {
          "name": "value_type",
          "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ValueType",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ValueType::UuidValue",
              "name": "uuid_value",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ValueType::TextValue",
              "name": "text_value",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ValueType::IntegerValue",
              "name": "integer_value",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ValueType::BooleanValue",
              "name": "boolean_value",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ValueType::ArrayValue",
              "name": "array_value",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ValueType::DecimalValue",
              "name": "decimal_value",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            }
          ],
          "values": [
            "uuid_value",
            "text_value",
            "integer_value",
            "boolean_value",
            "array_value",
            "decimal_value"
          ]
        },
        "custom_fields": {
          "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        },
        "import_data": {
          "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "answer_data": {
              "name": "answer_data",
              "source": "Census::Answers::WinLossAnalysisWonOrLostAnswer::Fields::ImportData::Fields::AnswerData",
              "type": "json"
            }
          }
        }
      }
    },
    "Choice": {
      "custom_fields": {
        "source": "Census::Choice::Fields::CustomFields",
        "name": "custom_fields",
        "type": "struct",
        "fields": {
          "is_reason_accepted": [
            true,
            false
          ]
        }
      },
      "import_data": {
        "source": "Census::Choice::Fields::ImportData",
        "name": "import_data",
        "type": "struct",
        "fields": {
          "imported_at": {
            "name": "imported_at",
            "source": "Census::Choice::Fields::ImportData::Fields::ImportedAt",
            "type": "time"
          },
          "choice_stream_id": {
            "name": "choice_stream_id",
            "source": "Census::Choice::Fields::ImportData::Fields::ChoiceStreamId",
            "type": "string"
          },
          "choice_data": {
            "name": "choice_data",
            "source": "Census::Choice::Fields::ImportData::Fields::ChoiceData",
            "type": "json"
          }
        }
      }
    },
    "Condition": {
      "operator": {
        "name": "operator",
        "source": "Census::Condition::Fields::Operator",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Operator::All",
            "name": "all",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Any",
            "name": "any",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Equal",
            "name": "equal",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Present",
            "name": "present",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Subset",
            "name": "subset",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Superset",
            "name": "superset",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          }
        ],
        "values": [
          "all",
          "any",
          "equal",
          "present",
          "subset",
          "superset"
        ]
      }
    },
    "GlobalParticipant": {
      "gender": {
        "name": "gender",
        "source": "Census::GlobalParticipant::Fields::Gender",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Fields::Gender::Unknown",
            "name": "unknown",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Gender::Male",
            "name": "male",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Gender::Female",
            "name": "female",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          }
        ],
        "values": [
          "unknown",
          "male",
          "female"
        ]
      },
      "locale": {
        "name": "locale",
        "source": "Census::GlobalParticipant::Fields::Locale",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Locale::Cs",
            "name": "cs",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Da",
            "name": "da",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::De",
            "name": "de",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::El",
            "name": "el",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::En",
            "name": "en",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnAu",
            "name": "en_au",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnCa",
            "name": "en_ca",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnGb",
            "name": "en_gb",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnUs",
            "name": "en_us",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Es",
            "name": "es",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Et",
            "name": "et",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fi",
            "name": "fi",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fr",
            "name": "fr",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Hu",
            "name": "hu",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Is",
            "name": "is",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::It",
            "name": "it",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nb",
            "name": "nb",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nl",
            "name": "nl",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pl",
            "name": "pl",
            "type": "enum_value",
            "integer_value": 19,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pt",
            "name": "pt",
            "type": "enum_value",
            "integer_value": 20,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Ro",
            "name": "ro",
            "type": "enum_value",
            "integer_value": 21,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sk",
            "name": "sk",
            "type": "enum_value",
            "integer_value": 22,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sv",
            "name": "sv",
            "type": "enum_value",
            "integer_value": 23,
            "attributes": {
            }
          }
        ],
        "values": [
          "cs",
          "da",
          "de",
          "el",
          "en",
          "en_au",
          "en_ca",
          "en_gb",
          "en_us",
          "es",
          "et",
          "fi",
          "fr",
          "hu",
          "is",
          "it",
          "nb",
          "nl",
          "pl",
          "pt",
          "ro",
          "sk",
          "sv"
        ]
      },
      "clearbit_discovery_status": {
        "name": "clearbit_discovery_status",
        "source": "Census::GlobalParticipant::Fields::ClearbitDiscoveryStatus",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::JobStatus::Unattempted",
            "name": "unattempted",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Failure",
            "name": "failure",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Success",
            "name": "success",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Pending",
            "name": "pending",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          }
        ],
        "values": [
          "unattempted",
          "failure",
          "success",
          "pending"
        ]
      },
      "role": {
        "name": "role",
        "source": "Census::GlobalParticipant::Fields::Role",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Fields::Role::Ceo",
            "name": "ceo",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "ceo"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::CustomerService",
            "name": "customer_service",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "customer_service"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Education",
            "name": "education",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "education"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Engineering",
            "name": "engineering",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "engineering"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Facilities",
            "name": "facilities",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "facilities"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Finance",
            "name": "finance",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "label": "finance"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::HealthProfessional",
            "name": "health_professional",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "label": "health_professional"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::HumanResources",
            "name": "human_resources",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
              "label": "human_resources"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Legal",
            "name": "legal",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
              "label": "legal"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Marketing",
            "name": "marketing",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
              "label": "marketing"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Operations",
            "name": "operations",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
              "label": "operations"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Other",
            "name": "other",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
              "label": "other"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Product",
            "name": "product",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
              "label": "product"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::PublicRelations",
            "name": "public_relations",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
              "label": "public_relations"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::RealEstate",
            "name": "real_estate",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
              "label": "real_estate"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Recruiting",
            "name": "recruiting",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
              "label": "recruiting"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Research",
            "name": "research",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
              "label": "research"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Sales",
            "name": "sales",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
              "label": "sales"
            }
          }
        ],
        "values": [
          "ceo",
          "customer_service",
          "education",
          "engineering",
          "facilities",
          "finance",
          "health_professional",
          "human_resources",
          "legal",
          "marketing",
          "operations",
          "other",
          "product",
          "public_relations",
          "real_estate",
          "recruiting",
          "research",
          "sales"
        ]
      },
      "seniority": {
        "name": "seniority",
        "source": "Census::GlobalParticipant::Fields::Seniority",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Fields::Seniority::Director",
            "name": "director",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "director"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::Executive",
            "name": "executive",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "executive"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::Founder",
            "name": "founder",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "founder"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::Manager",
            "name": "manager",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "manager"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::None",
            "name": "none",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "none"
            }
          }
        ],
        "values": [
          "director",
          "executive",
          "founder",
          "manager",
          "none"
        ]
      },
      "profile": {
        "source": "Census::GlobalParticipant::Fields::Profile",
        "name": "profile",
        "type": "struct",
        "fields": {
          "image_url": {
            "name": "image_url",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::ImageUrl",
            "type": "string"
          },
          "twitter": {
            "name": "twitter",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::Twitter",
            "type": "string"
          },
          "linkedin": {
            "name": "linkedin",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::Linkedin",
            "type": "string"
          },
          "googleplus": {
            "name": "googleplus",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::Googleplus",
            "type": "string"
          },
          "facebook": {
            "name": "facebook",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::Facebook",
            "type": "string"
          },
          "bio": {
            "name": "bio",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::Bio",
            "type": "string"
          },
          "clearbit_id": {
            "name": "clearbit_id",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::ClearbitId",
            "type": "string"
          },
          "site": {
            "name": "site",
            "source": "Census::GlobalParticipant::Fields::Profile::Fields::Site",
            "type": "string"
          }
        }
      },
      "import_data": {
        "source": "Census::GlobalParticipant::Fields::ImportData",
        "name": "import_data",
        "type": "struct",
        "fields": {
          "imported_at": {
            "name": "imported_at",
            "source": "Census::GlobalParticipant::Fields::ImportData::Fields::ImportedAt",
            "type": "time"
          },
          "notes": {
            "name": "notes",
            "source": "Census::GlobalParticipant::Fields::ImportData::Fields::Notes",
            "type": "array"
          },
          "user_stream_id": {
            "name": "user_stream_id",
            "source": "Census::GlobalParticipant::Fields::ImportData::Fields::UserStreamId",
            "type": "string"
          },
          "user_data": {
            "name": "user_data",
            "source": "Census::GlobalParticipant::Fields::ImportData::Fields::UserData",
            "type": "json"
          }
        }
      }
    },
    "Group": {
    },
    "Participant": {
      "flagged_attributes": null
    },
    "ParticipantGroupMembership": {
    },
    "Participation": {
      "status": {
        "name": "status",
        "source": "Census::Participation::Fields::Status",
        "type": "enum",
        "choices": [
          {
            "source": "Census::Participation::Fields::Status::Open",
            "name": "open",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Census::Participation::Fields::Status::Started",
            "name": "started",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Census::Participation::Fields::Status::Completed",
            "name": "completed",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          }
        ],
        "values": [
          "open",
          "started",
          "completed"
        ]
      },
      "gender": {
        "name": "gender",
        "source": "Census::Participation::Fields::Gender",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Fields::Gender::Unknown",
            "name": "unknown",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Gender::Male",
            "name": "male",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Gender::Female",
            "name": "female",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          }
        ],
        "values": [
          "unknown",
          "male",
          "female"
        ]
      },
      "role": {
        "name": "role",
        "source": "Census::Participation::Fields::Role",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Fields::Role::Ceo",
            "name": "ceo",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "ceo"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::CustomerService",
            "name": "customer_service",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "customer_service"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Education",
            "name": "education",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "education"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Engineering",
            "name": "engineering",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "engineering"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Facilities",
            "name": "facilities",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "facilities"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Finance",
            "name": "finance",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "label": "finance"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::HealthProfessional",
            "name": "health_professional",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "label": "health_professional"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::HumanResources",
            "name": "human_resources",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
              "label": "human_resources"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Legal",
            "name": "legal",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
              "label": "legal"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Marketing",
            "name": "marketing",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
              "label": "marketing"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Operations",
            "name": "operations",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
              "label": "operations"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Other",
            "name": "other",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
              "label": "other"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Product",
            "name": "product",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
              "label": "product"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::PublicRelations",
            "name": "public_relations",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
              "label": "public_relations"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::RealEstate",
            "name": "real_estate",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
              "label": "real_estate"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Recruiting",
            "name": "recruiting",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
              "label": "recruiting"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Research",
            "name": "research",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
              "label": "research"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Role::Sales",
            "name": "sales",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
              "label": "sales"
            }
          }
        ],
        "values": [
          "ceo",
          "customer_service",
          "education",
          "engineering",
          "facilities",
          "finance",
          "health_professional",
          "human_resources",
          "legal",
          "marketing",
          "operations",
          "other",
          "product",
          "public_relations",
          "real_estate",
          "recruiting",
          "research",
          "sales"
        ]
      },
      "seniority": {
        "name": "seniority",
        "source": "Census::Participation::Fields::Seniority",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Fields::Seniority::Director",
            "name": "director",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "director"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::Executive",
            "name": "executive",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "executive"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::Founder",
            "name": "founder",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "founder"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::Manager",
            "name": "manager",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "manager"
            }
          },
          {
            "source": "Kore::Types::Census::Fields::Seniority::None",
            "name": "none",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "none"
            }
          }
        ],
        "values": [
          "director",
          "executive",
          "founder",
          "manager",
          "none"
        ]
      },
      "import_data": {
        "source": "Census::Participation::Fields::ImportData",
        "name": "import_data",
        "type": "struct",
        "fields": {
          "imported_at": {
            "name": "imported_at",
            "source": "Census::Participation::Fields::ImportData::Fields::ImportedAt",
            "type": "time"
          },
          "notes": {
            "name": "notes",
            "source": "Census::Participation::Fields::ImportData::Fields::Notes",
            "type": "array"
          },
          "attempt_stream_id": {
            "name": "attempt_stream_id",
            "source": "Census::Participation::Fields::ImportData::Fields::AttemptStreamId",
            "type": "string"
          },
          "attempt_data": {
            "name": "attempt_data",
            "source": "Census::Participation::Fields::ImportData::Fields::AttemptData",
            "type": "json"
          }
        }
      }
    },
    "Question": {
      "kind": {
        "name": "kind",
        "source": "Census::Question::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
            "name": "boolean",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Census::Questions::BooleanQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
            "name": "multiple_choice_image",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Census::Questions::MultipleChoiceImageQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
            "name": "multiple_choice_many",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Census::Questions::MultipleChoiceManyQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
            "name": "multiple_choice",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "type": "Census::Questions::MultipleChoiceQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
            "name": "nps_number_scale",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "type": "Census::Questions::NpsNumberScaleQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
            "name": "nps_text",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "type": "Census::Questions::NpsTextQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
            "name": "number_scale",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "type": "Census::Questions::NumberScaleQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
            "name": "post_case_are_you_satisfied",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
              "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
            "name": "post_case_what_could_we_have_done_better",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
              "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
            "name": "post_case_what_did_we_do_well",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
              "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::Text",
            "name": "text",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
              "type": "Census::Questions::TextQuestion"
            }
          },
          {
            "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
            "name": "ranking",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
              "type": "Census::Questions::RankingQuestion"
            }
          }
        ],
        "values": [
          "boolean",
          "multiple_choice_image",
          "multiple_choice_many",
          "multiple_choice",
          "nps_number_scale",
          "nps_text",
          "number_scale",
          "post_case_are_you_satisfied",
          "post_case_what_could_we_have_done_better",
          "post_case_what_did_we_do_well",
          "text",
          "ranking"
        ]
      },
      "custom_fields": {
        "source": "Census::Question::Fields::CustomFields",
        "name": "custom_fields",
        "type": "struct",
        "fields": {
          "introduction": {
            "name": "introduction",
            "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
            "type": "string"
          },
          "conclusion": {
            "name": "conclusion",
            "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
            "type": "string"
          }
        }
      },
      "import_data": {
        "source": "Census::Question::Fields::ImportData",
        "name": "import_data",
        "type": "struct",
        "fields": {
          "imported_at": {
            "name": "imported_at",
            "source": "Census::Question::Fields::ImportData::Fields::ImportedAt",
            "type": "time"
          },
          "notes": {
            "name": "notes",
            "source": "Census::Question::Fields::ImportData::Fields::Notes",
            "type": "array"
          },
          "question_reaction_id": {
            "name": "question_reaction_id",
            "source": "Census::Question::Fields::ImportData::Fields::QuestionReactionId",
            "type": "integer"
          },
          "question_stream_id": {
            "name": "question_stream_id",
            "source": "Census::Question::Fields::ImportData::Fields::QuestionStreamId",
            "type": "string"
          },
          "question_data": {
            "name": "question_data",
            "source": "Census::Question::Fields::ImportData::Fields::QuestionData",
            "type": "json"
          }
        }
      },
      "types": [
        "Census::Questions::BooleanQuestion",
        "Census::Questions::MultipleChoiceImageQuestion",
        "Census::Questions::MultipleChoiceManyQuestion",
        "Census::Questions::MultipleChoiceQuestion",
        "Census::Questions::NpsNumberScaleQuestion",
        "Census::Questions::NpsTextQuestion",
        "Census::Questions::NumberScaleQuestion",
        "Census::Questions::RankingQuestion",
        "Census::Questions::TextQuestion"
      ]
    },
    "Questions": {
      "BooleanQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::BooleanQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::BooleanQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "true_value_name": {
              "name": "true_value_name",
              "source": "Census::Questions::BooleanQuestion::Fields::CustomFields::Fields::TrueValueName",
              "type": "string"
            },
            "false_value_name": {
              "name": "false_value_name",
              "source": "Census::Questions::BooleanQuestion::Fields::CustomFields::Fields::FalseValueName",
              "type": "string"
            },
            "label_for_true_value": {
              "name": "label_for_true_value",
              "source": "Census::Questions::BooleanQuestion::Fields::CustomFields::Fields::LabelForTrueValue",
              "type": "string"
            },
            "label_for_false_value": {
              "name": "label_for_false_value",
              "source": "Census::Questions::BooleanQuestion::Fields::CustomFields::Fields::LabelForFalseValue",
              "type": "string"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::BooleanQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::BooleanQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::BooleanQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::BooleanQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::BooleanQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::BooleanQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Questions::PostCaseAreYouSatisfiedQuestion",
          "Census::Questions::WinLossAnalysisWonOrLostQuestion"
        ]
      },
      "MultipleChoiceImageQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "introduction": {
              "name": "introduction",
              "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::MultipleChoiceImageQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "MultipleChoiceManyQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "answer_max_choices": {
              "name": "answer_max_choices",
              "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::CustomFields::Fields::AnswerMaxChoices",
              "type": "integer"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::MultipleChoiceManyQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "MultipleChoiceQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::MultipleChoiceQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::MultipleChoiceQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::MultipleChoiceQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::MultipleChoiceQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::MultipleChoiceQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::MultipleChoiceQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::MultipleChoiceQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::MultipleChoiceQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::MultipleChoiceQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion",
          "Census::Questions::PostCaseWhatDidWeDoWellQuestion",
          "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion",
          "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion",
          "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion"
        ]
      },
      "NpsNumberScaleQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::NpsNumberScaleQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::NpsNumberScaleQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "introduction": {
              "name": "introduction",
              "source": "Census::Questions::NpsNumberScaleQuestion::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Questions::NpsNumberScaleQuestion::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::NpsNumberScaleQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::NpsNumberScaleQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::NpsNumberScaleQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::NpsNumberScaleQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::NpsNumberScaleQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::NpsNumberScaleQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "NpsTextQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::NpsTextQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::NpsTextQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "introduction": {
              "name": "introduction",
              "source": "Census::Questions::NpsTextQuestion::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Questions::NpsTextQuestion::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::NpsTextQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "detractor_question_reaction_id": {
              "name": "detractor_question_reaction_id",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::DetractorQuestionReactionId",
              "type": "integer"
            },
            "detractor_question_stream_id": {
              "name": "detractor_question_stream_id",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::DetractorQuestionStreamId",
              "type": "string"
            },
            "detractor_question_data": {
              "name": "detractor_question_data",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::DetractorQuestionData",
              "type": "json"
            },
            "passive_question_reaction_id": {
              "name": "passive_question_reaction_id",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::PassiveQuestionReactionId",
              "type": "integer"
            },
            "passive_question_stream_id": {
              "name": "passive_question_stream_id",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::PassiveQuestionStreamId",
              "type": "string"
            },
            "passive_question_data": {
              "name": "passive_question_data",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::PassiveQuestionData",
              "type": "json"
            },
            "promoter_question_reaction_id": {
              "name": "promoter_question_reaction_id",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::PromoterQuestionReactionId",
              "type": "integer"
            },
            "promoter_question_stream_id": {
              "name": "promoter_question_stream_id",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::PromoterQuestionStreamId",
              "type": "string"
            },
            "promoter_question_data": {
              "name": "promoter_question_data",
              "source": "Census::Questions::NpsTextQuestion::Fields::ImportData::Fields::PromoterQuestionData",
              "type": "json"
            }
          }
        }
      },
      "NumberScaleQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::NumberScaleQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::NumberScaleQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "answer_min_value": {
              "name": "answer_min_value",
              "source": "Census::Questions::NumberScaleQuestion::Fields::CustomFields::Fields::AnswerMinValue",
              "type": "integer"
            },
            "answer_max_value": {
              "name": "answer_max_value",
              "source": "Census::Questions::NumberScaleQuestion::Fields::CustomFields::Fields::AnswerMaxValue",
              "type": "integer"
            },
            "answer_min_value_label": {
              "name": "answer_min_value_label",
              "source": "Census::Questions::NumberScaleQuestion::Fields::CustomFields::Fields::AnswerMinValueLabel",
              "type": "string"
            },
            "answer_max_value_label": {
              "name": "answer_max_value_label",
              "source": "Census::Questions::NumberScaleQuestion::Fields::CustomFields::Fields::AnswerMaxValueLabel",
              "type": "string"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::NumberScaleQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::NumberScaleQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::NumberScaleQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::NumberScaleQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::NumberScaleQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::NumberScaleQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Questions::WinLossAnalysisLossRateExperienceQuestion"
        ]
      },
      "PostCaseAreYouSatisfiedQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "true_value_name": {
              "name": "true_value_name",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::CustomFields::Fields::TrueValueName",
              "type": "string"
            },
            "false_value_name": {
              "name": "false_value_name",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::CustomFields::Fields::FalseValueName",
              "type": "string"
            },
            "label_for_true_value": {
              "name": "label_for_true_value",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::CustomFields::Fields::LabelForTrueValue",
              "type": "string"
            },
            "label_for_false_value": {
              "name": "label_for_false_value",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::CustomFields::Fields::LabelForFalseValue",
              "type": "string"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::PostCaseAreYouSatisfiedQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "PostCaseWhatCouldWeHaveDoneBetterQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "PostCaseWhatDidWeDoWellQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::PostCaseWhatDidWeDoWellQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "RankingQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::RankingQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::RankingQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::RankingQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::RankingQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::RankingQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::RankingQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::RankingQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::RankingQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::RankingQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "TextQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::TextQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::TextQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "answer_max_length": {
              "name": "answer_max_length",
              "source": "Census::Questions::TextQuestion::Fields::CustomFields::Fields::AnswerMaxLength",
              "type": "integer"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::TextQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::TextQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::TextQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::TextQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::TextQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::TextQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        },
        "types": [
          "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion",
          "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion"
        ]
      },
      "WinLossAnalysisLossRateExperienceQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "answer_min_value": {
              "name": "answer_min_value",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::CustomFields::Fields::AnswerMinValue",
              "type": "integer"
            },
            "answer_max_value": {
              "name": "answer_max_value",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::CustomFields::Fields::AnswerMaxValue",
              "type": "integer"
            },
            "answer_min_value_label": {
              "name": "answer_min_value_label",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::CustomFields::Fields::AnswerMinValueLabel",
              "type": "string"
            },
            "answer_max_value_label": {
              "name": "answer_max_value_label",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::CustomFields::Fields::AnswerMaxValueLabel",
              "type": "string"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::WinLossAnalysisLossRateExperienceQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisLossReasonForNotPurchasingQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::WinLossAnalysisLossReasonForNotPurchasingQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::WinLossAnalysisLossWhichCompetitorWouldYouChooseQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWinFeatureExcitementQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "choices_order": {
              "name": "choices_order",
              "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::CustomFields::Fields::ChoicesOrder",
              "type": "array"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::WinLossAnalysisWinFeatureExcitementQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "answer_max_length": {
              "name": "answer_max_length",
              "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::CustomFields::Fields::AnswerMaxLength",
              "type": "integer"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::WinLossAnalysisWinReasonForChoiceOverCompetitionQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWinWhoIsBestContactQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "answer_max_length": {
              "name": "answer_max_length",
              "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::CustomFields::Fields::AnswerMaxLength",
              "type": "integer"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::WinLossAnalysisWinWhoIsBestContactQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisWonOrLostQuestion": {
        "kind": {
          "name": "kind",
          "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
              "name": "boolean",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Questions::BooleanQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
              "name": "multiple_choice_image",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceImageQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
              "name": "multiple_choice_many",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceManyQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
              "name": "multiple_choice",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Questions::MultipleChoiceQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
              "name": "nps_number_scale",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Census::Questions::NpsNumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
              "name": "nps_text",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Census::Questions::NpsTextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
              "name": "number_scale",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Census::Questions::NumberScaleQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
              "name": "post_case_are_you_satisfied",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
              "name": "post_case_what_could_we_have_done_better",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
              "name": "post_case_what_did_we_do_well",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Text",
              "name": "text",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "type": "Census::Questions::TextQuestion"
              }
            },
            {
              "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
              "name": "ranking",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "type": "Census::Questions::RankingQuestion"
              }
            }
          ],
          "values": [
            "boolean",
            "multiple_choice_image",
            "multiple_choice_many",
            "multiple_choice",
            "nps_number_scale",
            "nps_text",
            "number_scale",
            "post_case_are_you_satisfied",
            "post_case_what_could_we_have_done_better",
            "post_case_what_did_we_do_well",
            "text",
            "ranking"
          ]
        },
        "custom_fields": {
          "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "true_value_name": {
              "name": "true_value_name",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::CustomFields::Fields::TrueValueName",
              "type": "string"
            },
            "false_value_name": {
              "name": "false_value_name",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::CustomFields::Fields::FalseValueName",
              "type": "string"
            },
            "label_for_true_value": {
              "name": "label_for_true_value",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::CustomFields::Fields::LabelForTrueValue",
              "type": "string"
            },
            "label_for_false_value": {
              "name": "label_for_false_value",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::CustomFields::Fields::LabelForFalseValue",
              "type": "string"
            },
            "introduction": {
              "name": "introduction",
              "source": "Census::Question::Fields::CustomFields::Fields::Introduction",
              "type": "string"
            },
            "conclusion": {
              "name": "conclusion",
              "source": "Census::Question::Fields::CustomFields::Fields::Conclusion",
              "type": "string"
            }
          }
        },
        "import_data": {
          "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "question_reaction_id": {
              "name": "question_reaction_id",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::ImportData::Fields::QuestionReactionId",
              "type": "integer"
            },
            "question_stream_id": {
              "name": "question_stream_id",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::ImportData::Fields::QuestionStreamId",
              "type": "string"
            },
            "question_data": {
              "name": "question_data",
              "source": "Census::Questions::WinLossAnalysisWonOrLostQuestion::Fields::ImportData::Fields::QuestionData",
              "type": "json"
            }
          }
        }
      }
    },
    "SharedVisualization": {
    },
    "Survey": {
      "status": {
        "name": "status",
        "source": "Census::Survey::Fields::Status",
        "type": "enum",
        "choices": [
          {
            "source": "Census::Survey::Fields::Status::Draft",
            "name": "draft",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Census::Survey::Fields::Status::AwaitingApproval",
            "name": "awaiting_approval",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Census::Survey::Fields::Status::Approved",
            "name": "approved",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Census::Survey::Fields::Status::Scheduled",
            "name": "scheduled",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Census::Survey::Fields::Status::Open",
            "name": "open",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Census::Survey::Fields::Status::Closed",
            "name": "closed",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          },
          {
            "source": "Census::Survey::Fields::Status::Deleted",
            "name": "deleted",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
            }
          }
        ],
        "values": [
          "draft",
          "awaiting_approval",
          "approved",
          "scheduled",
          "open",
          "closed",
          "deleted"
        ]
      },
      "default_locale": {
        "name": "default_locale",
        "source": "Census::Survey::Fields::DefaultLocale",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Locale::Cs",
            "name": "cs",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Da",
            "name": "da",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::De",
            "name": "de",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::El",
            "name": "el",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::En",
            "name": "en",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnAu",
            "name": "en_au",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnCa",
            "name": "en_ca",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnGb",
            "name": "en_gb",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnUs",
            "name": "en_us",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Es",
            "name": "es",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Et",
            "name": "et",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fi",
            "name": "fi",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fr",
            "name": "fr",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Hu",
            "name": "hu",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Is",
            "name": "is",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::It",
            "name": "it",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nb",
            "name": "nb",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nl",
            "name": "nl",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pl",
            "name": "pl",
            "type": "enum_value",
            "integer_value": 19,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pt",
            "name": "pt",
            "type": "enum_value",
            "integer_value": 20,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Ro",
            "name": "ro",
            "type": "enum_value",
            "integer_value": 21,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sk",
            "name": "sk",
            "type": "enum_value",
            "integer_value": 22,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sv",
            "name": "sv",
            "type": "enum_value",
            "integer_value": 23,
            "attributes": {
            }
          }
        ],
        "values": [
          "cs",
          "da",
          "de",
          "el",
          "en",
          "en_au",
          "en_ca",
          "en_gb",
          "en_us",
          "es",
          "et",
          "fi",
          "fr",
          "hu",
          "is",
          "it",
          "nb",
          "nl",
          "pl",
          "pt",
          "ro",
          "sk",
          "sv"
        ]
      },
      "kind": {
        "name": "kind",
        "source": "Census::Survey::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Census::Survey::Fields::Kind::Freeform",
            "name": "freeform",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Census::Surveys::FreeformSurvey",
              "description": "Freeform",
              "abbreviation": "FFM"
            }
          },
          {
            "source": "Kore::Types::Census::Survey::Fields::Kind::Nps",
            "name": "nps",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Census::Surveys::NpsSurvey",
              "description": "Net Promoter Score",
              "abbreviation": "NPS"
            }
          },
          {
            "source": "Kore::Types::Census::Survey::Fields::Kind::PostCase",
            "name": "post_case",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Census::Surveys::PostCaseSurvey",
              "description": "Post Case",
              "abbreviation": "PCS"
            }
          },
          {
            "source": "Kore::Types::Census::Survey::Fields::Kind::WinLossAnalysis",
            "name": "win_loss_analysis",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "type": "Census::Surveys::WinLossAnalysisSurvey",
              "description": "Win Loss Analysis",
              "abbreviation": "WLA"
            }
          }
        ],
        "values": [
          "freeform",
          "nps",
          "post_case",
          "win_loss_analysis"
        ]
      },
      "custom_fields": {
        "source": "Census::Survey::Fields::CustomFields",
        "name": "custom_fields",
        "type": "struct",
        "fields": {
          "questions_order": {
            "name": "questions_order",
            "source": "Census::Survey::Fields::CustomFields::Fields::QuestionsOrder",
            "type": "array"
          }
        }
      },
      "settings": {
        "source": "Census::Survey::Fields::Settings",
        "name": "settings",
        "type": "struct",
        "fields": {
          "requires_signatures_to_advance": [
            true,
            false
          ],
          "admin_color": {
            "name": "admin_color",
            "source": "Census::Survey::Fields::Settings::Fields::AdminColor",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Ui::Fields::Color::Red",
                "name": "red",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "hex": "#db2828",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Orange",
                "name": "orange",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "hex": "#f2711c",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Yellow",
                "name": "yellow",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "hex": "#fbbd08",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Olive",
                "name": "olive",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "hex": "#b5cc18",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Green",
                "name": "green",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "hex": "#21ba45",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Teal",
                "name": "teal",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "hex": "#00b5ad",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Blue",
                "name": "blue",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "hex": "#2185d0",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Violet",
                "name": "violet",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "hex": "#6435c9",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Purple",
                "name": "purple",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "hex": "#a333c8",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Grey",
                "name": "grey",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "hex": "#767676",
                  "contrast": "white"
                }
              }
            ],
            "values": [
              "red",
              "orange",
              "yellow",
              "olive",
              "green",
              "teal",
              "blue",
              "violet",
              "purple",
              "grey"
            ]
          }
        }
      },
      "import_data": {
        "source": "Census::Survey::Fields::ImportData",
        "name": "import_data",
        "type": "struct",
        "fields": {
          "imported_at": {
            "name": "imported_at",
            "source": "Census::Survey::Fields::ImportData::Fields::ImportedAt",
            "type": "time"
          },
          "notes": {
            "name": "notes",
            "source": "Census::Survey::Fields::ImportData::Fields::Notes",
            "type": "array"
          },
          "survey_reaction_id": {
            "name": "survey_reaction_id",
            "source": "Census::Survey::Fields::ImportData::Fields::SurveyReactionId",
            "type": "integer"
          },
          "survey_stream_id": {
            "name": "survey_stream_id",
            "source": "Census::Survey::Fields::ImportData::Fields::SurveyStreamId",
            "type": "string"
          },
          "survey_data": {
            "name": "survey_data",
            "source": "Census::Survey::Fields::ImportData::Fields::SurveyData",
            "type": "json"
          }
        }
      },
      "types": [
        "Census::Surveys::FreeformSurvey",
        "Census::Surveys::NpsSurvey",
        "Census::Surveys::PostCaseSurvey",
        "Census::Surveys::WinLossAnalysisSurvey"
      ]
    },
    "Surveys": {
      "FreeformSurvey": {
        "status": {
          "name": "status",
          "source": "Census::Surveys::FreeformSurvey::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Surveys::FreeformSurvey::Fields::Status::Draft",
              "name": "draft",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::FreeformSurvey::Fields::Status::AwaitingApproval",
              "name": "awaiting_approval",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::FreeformSurvey::Fields::Status::Approved",
              "name": "approved",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::FreeformSurvey::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::FreeformSurvey::Fields::Status::Open",
              "name": "open",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::FreeformSurvey::Fields::Status::Closed",
              "name": "closed",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::FreeformSurvey::Fields::Status::Deleted",
              "name": "deleted",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            }
          ],
          "values": [
            "draft",
            "awaiting_approval",
            "approved",
            "scheduled",
            "open",
            "closed",
            "deleted"
          ]
        },
        "default_locale": {
          "name": "default_locale",
          "source": "Census::Surveys::FreeformSurvey::Fields::DefaultLocale",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Fields::Locale::Cs",
              "name": "cs",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Da",
              "name": "da",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::De",
              "name": "de",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::El",
              "name": "el",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::En",
              "name": "en",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnAu",
              "name": "en_au",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnCa",
              "name": "en_ca",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnGb",
              "name": "en_gb",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnUs",
              "name": "en_us",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Es",
              "name": "es",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Et",
              "name": "et",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fi",
              "name": "fi",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fr",
              "name": "fr",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Hu",
              "name": "hu",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Is",
              "name": "is",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::It",
              "name": "it",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nb",
              "name": "nb",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nl",
              "name": "nl",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pl",
              "name": "pl",
              "type": "enum_value",
              "integer_value": 19,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pt",
              "name": "pt",
              "type": "enum_value",
              "integer_value": 20,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Ro",
              "name": "ro",
              "type": "enum_value",
              "integer_value": 21,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sk",
              "name": "sk",
              "type": "enum_value",
              "integer_value": 22,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sv",
              "name": "sv",
              "type": "enum_value",
              "integer_value": 23,
              "attributes": {
              }
            }
          ],
          "values": [
            "cs",
            "da",
            "de",
            "el",
            "en",
            "en_au",
            "en_ca",
            "en_gb",
            "en_us",
            "es",
            "et",
            "fi",
            "fr",
            "hu",
            "is",
            "it",
            "nb",
            "nl",
            "pl",
            "pt",
            "ro",
            "sk",
            "sv"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Census::Surveys::FreeformSurvey::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Freeform",
              "name": "freeform",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Surveys::FreeformSurvey",
                "description": "Freeform",
                "abbreviation": "FFM"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Nps",
              "name": "nps",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Surveys::NpsSurvey",
                "description": "Net Promoter Score",
                "abbreviation": "NPS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::PostCase",
              "name": "post_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Surveys::PostCaseSurvey",
                "description": "Post Case",
                "abbreviation": "PCS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::WinLossAnalysis",
              "name": "win_loss_analysis",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Surveys::WinLossAnalysisSurvey",
                "description": "Win Loss Analysis",
                "abbreviation": "WLA"
              }
            }
          ],
          "values": [
            "freeform",
            "nps",
            "post_case",
            "win_loss_analysis"
          ]
        },
        "custom_fields": {
          "source": "Census::Surveys::FreeformSurvey::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "subject_name": {
              "name": "subject_name",
              "source": "Census::Surveys::FreeformSurvey::Fields::CustomFields::Fields::SubjectName",
              "type": "string"
            },
            "questions_order": {
              "name": "questions_order",
              "source": "Census::Survey::Fields::CustomFields::Fields::QuestionsOrder",
              "type": "array"
            }
          }
        },
        "settings": {
          "source": "Census::Surveys::FreeformSurvey::Fields::Settings",
          "name": "settings",
          "type": "struct",
          "fields": {
            "requires_signatures_to_advance": [
              true,
              false
            ],
            "admin_color": {
              "name": "admin_color",
              "source": "Census::Surveys::FreeformSurvey::Fields::Settings::Fields::AdminColor",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Ui::Fields::Color::Red",
                  "name": "red",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "hex": "#db2828",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Orange",
                  "name": "orange",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "hex": "#f2711c",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Yellow",
                  "name": "yellow",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "hex": "#fbbd08",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Olive",
                  "name": "olive",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "hex": "#b5cc18",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Green",
                  "name": "green",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                    "hex": "#21ba45",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Teal",
                  "name": "teal",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                    "hex": "#00b5ad",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Blue",
                  "name": "blue",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                    "hex": "#2185d0",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Violet",
                  "name": "violet",
                  "type": "enum_value",
                  "integer_value": 8,
                  "attributes": {
                    "hex": "#6435c9",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Purple",
                  "name": "purple",
                  "type": "enum_value",
                  "integer_value": 9,
                  "attributes": {
                    "hex": "#a333c8",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Grey",
                  "name": "grey",
                  "type": "enum_value",
                  "integer_value": 10,
                  "attributes": {
                    "hex": "#767676",
                    "contrast": "white"
                  }
                }
              ],
              "values": [
                "red",
                "orange",
                "yellow",
                "olive",
                "green",
                "teal",
                "blue",
                "violet",
                "purple",
                "grey"
              ]
            }
          }
        },
        "import_data": {
          "source": "Census::Surveys::FreeformSurvey::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Surveys::FreeformSurvey::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Surveys::FreeformSurvey::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "survey_reaction_id": {
              "name": "survey_reaction_id",
              "source": "Census::Surveys::FreeformSurvey::Fields::ImportData::Fields::SurveyReactionId",
              "type": "integer"
            },
            "survey_stream_id": {
              "name": "survey_stream_id",
              "source": "Census::Surveys::FreeformSurvey::Fields::ImportData::Fields::SurveyStreamId",
              "type": "string"
            },
            "survey_data": {
              "name": "survey_data",
              "source": "Census::Surveys::FreeformSurvey::Fields::ImportData::Fields::SurveyData",
              "type": "json"
            }
          }
        }
      },
      "NpsSurvey": {
        "status": {
          "name": "status",
          "source": "Census::Surveys::NpsSurvey::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Surveys::NpsSurvey::Fields::Status::Draft",
              "name": "draft",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::NpsSurvey::Fields::Status::AwaitingApproval",
              "name": "awaiting_approval",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::NpsSurvey::Fields::Status::Approved",
              "name": "approved",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::NpsSurvey::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::NpsSurvey::Fields::Status::Open",
              "name": "open",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::NpsSurvey::Fields::Status::Closed",
              "name": "closed",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::NpsSurvey::Fields::Status::Deleted",
              "name": "deleted",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            }
          ],
          "values": [
            "draft",
            "awaiting_approval",
            "approved",
            "scheduled",
            "open",
            "closed",
            "deleted"
          ]
        },
        "default_locale": {
          "name": "default_locale",
          "source": "Census::Surveys::NpsSurvey::Fields::DefaultLocale",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Fields::Locale::Cs",
              "name": "cs",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Da",
              "name": "da",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::De",
              "name": "de",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::El",
              "name": "el",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::En",
              "name": "en",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnAu",
              "name": "en_au",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnCa",
              "name": "en_ca",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnGb",
              "name": "en_gb",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnUs",
              "name": "en_us",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Es",
              "name": "es",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Et",
              "name": "et",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fi",
              "name": "fi",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fr",
              "name": "fr",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Hu",
              "name": "hu",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Is",
              "name": "is",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::It",
              "name": "it",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nb",
              "name": "nb",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nl",
              "name": "nl",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pl",
              "name": "pl",
              "type": "enum_value",
              "integer_value": 19,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pt",
              "name": "pt",
              "type": "enum_value",
              "integer_value": 20,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Ro",
              "name": "ro",
              "type": "enum_value",
              "integer_value": 21,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sk",
              "name": "sk",
              "type": "enum_value",
              "integer_value": 22,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sv",
              "name": "sv",
              "type": "enum_value",
              "integer_value": 23,
              "attributes": {
              }
            }
          ],
          "values": [
            "cs",
            "da",
            "de",
            "el",
            "en",
            "en_au",
            "en_ca",
            "en_gb",
            "en_us",
            "es",
            "et",
            "fi",
            "fr",
            "hu",
            "is",
            "it",
            "nb",
            "nl",
            "pl",
            "pt",
            "ro",
            "sk",
            "sv"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Census::Surveys::NpsSurvey::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Freeform",
              "name": "freeform",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Surveys::FreeformSurvey",
                "description": "Freeform",
                "abbreviation": "FFM"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Nps",
              "name": "nps",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Surveys::NpsSurvey",
                "description": "Net Promoter Score",
                "abbreviation": "NPS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::PostCase",
              "name": "post_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Surveys::PostCaseSurvey",
                "description": "Post Case",
                "abbreviation": "PCS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::WinLossAnalysis",
              "name": "win_loss_analysis",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Surveys::WinLossAnalysisSurvey",
                "description": "Win Loss Analysis",
                "abbreviation": "WLA"
              }
            }
          ],
          "values": [
            "freeform",
            "nps",
            "post_case",
            "win_loss_analysis"
          ]
        },
        "custom_fields": {
          "source": "Census::Surveys::NpsSurvey::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "subject_name": {
              "name": "subject_name",
              "source": "Census::Surveys::NpsSurvey::Fields::CustomFields::Fields::SubjectName",
              "type": "string"
            },
            "questions_order": {
              "name": "questions_order",
              "source": "Census::Survey::Fields::CustomFields::Fields::QuestionsOrder",
              "type": "array"
            }
          }
        },
        "settings": {
          "source": "Census::Surveys::NpsSurvey::Fields::Settings",
          "name": "settings",
          "type": "struct",
          "fields": {
            "requires_signatures_to_advance": [
              true,
              false
            ],
            "admin_color": {
              "name": "admin_color",
              "source": "Census::Surveys::NpsSurvey::Fields::Settings::Fields::AdminColor",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Ui::Fields::Color::Red",
                  "name": "red",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "hex": "#db2828",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Orange",
                  "name": "orange",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "hex": "#f2711c",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Yellow",
                  "name": "yellow",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "hex": "#fbbd08",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Olive",
                  "name": "olive",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "hex": "#b5cc18",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Green",
                  "name": "green",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                    "hex": "#21ba45",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Teal",
                  "name": "teal",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                    "hex": "#00b5ad",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Blue",
                  "name": "blue",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                    "hex": "#2185d0",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Violet",
                  "name": "violet",
                  "type": "enum_value",
                  "integer_value": 8,
                  "attributes": {
                    "hex": "#6435c9",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Purple",
                  "name": "purple",
                  "type": "enum_value",
                  "integer_value": 9,
                  "attributes": {
                    "hex": "#a333c8",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Grey",
                  "name": "grey",
                  "type": "enum_value",
                  "integer_value": 10,
                  "attributes": {
                    "hex": "#767676",
                    "contrast": "white"
                  }
                }
              ],
              "values": [
                "red",
                "orange",
                "yellow",
                "olive",
                "green",
                "teal",
                "blue",
                "violet",
                "purple",
                "grey"
              ]
            }
          }
        },
        "import_data": {
          "source": "Census::Surveys::NpsSurvey::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Surveys::NpsSurvey::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Surveys::NpsSurvey::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "survey_reaction_id": {
              "name": "survey_reaction_id",
              "source": "Census::Surveys::NpsSurvey::Fields::ImportData::Fields::SurveyReactionId",
              "type": "integer"
            },
            "survey_stream_id": {
              "name": "survey_stream_id",
              "source": "Census::Surveys::NpsSurvey::Fields::ImportData::Fields::SurveyStreamId",
              "type": "string"
            },
            "survey_data": {
              "name": "survey_data",
              "source": "Census::Surveys::NpsSurvey::Fields::ImportData::Fields::SurveyData",
              "type": "json"
            }
          }
        }
      },
      "PostCaseSurvey": {
        "status": {
          "name": "status",
          "source": "Census::Surveys::PostCaseSurvey::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Surveys::PostCaseSurvey::Fields::Status::Draft",
              "name": "draft",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::PostCaseSurvey::Fields::Status::AwaitingApproval",
              "name": "awaiting_approval",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::PostCaseSurvey::Fields::Status::Approved",
              "name": "approved",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::PostCaseSurvey::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::PostCaseSurvey::Fields::Status::Open",
              "name": "open",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::PostCaseSurvey::Fields::Status::Closed",
              "name": "closed",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::PostCaseSurvey::Fields::Status::Deleted",
              "name": "deleted",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            }
          ],
          "values": [
            "draft",
            "awaiting_approval",
            "approved",
            "scheduled",
            "open",
            "closed",
            "deleted"
          ]
        },
        "default_locale": {
          "name": "default_locale",
          "source": "Census::Surveys::PostCaseSurvey::Fields::DefaultLocale",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Fields::Locale::Cs",
              "name": "cs",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Da",
              "name": "da",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::De",
              "name": "de",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::El",
              "name": "el",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::En",
              "name": "en",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnAu",
              "name": "en_au",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnCa",
              "name": "en_ca",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnGb",
              "name": "en_gb",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnUs",
              "name": "en_us",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Es",
              "name": "es",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Et",
              "name": "et",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fi",
              "name": "fi",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fr",
              "name": "fr",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Hu",
              "name": "hu",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Is",
              "name": "is",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::It",
              "name": "it",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nb",
              "name": "nb",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nl",
              "name": "nl",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pl",
              "name": "pl",
              "type": "enum_value",
              "integer_value": 19,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pt",
              "name": "pt",
              "type": "enum_value",
              "integer_value": 20,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Ro",
              "name": "ro",
              "type": "enum_value",
              "integer_value": 21,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sk",
              "name": "sk",
              "type": "enum_value",
              "integer_value": 22,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sv",
              "name": "sv",
              "type": "enum_value",
              "integer_value": 23,
              "attributes": {
              }
            }
          ],
          "values": [
            "cs",
            "da",
            "de",
            "el",
            "en",
            "en_au",
            "en_ca",
            "en_gb",
            "en_us",
            "es",
            "et",
            "fi",
            "fr",
            "hu",
            "is",
            "it",
            "nb",
            "nl",
            "pl",
            "pt",
            "ro",
            "sk",
            "sv"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Census::Surveys::PostCaseSurvey::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Freeform",
              "name": "freeform",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Surveys::FreeformSurvey",
                "description": "Freeform",
                "abbreviation": "FFM"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Nps",
              "name": "nps",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Surveys::NpsSurvey",
                "description": "Net Promoter Score",
                "abbreviation": "NPS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::PostCase",
              "name": "post_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Surveys::PostCaseSurvey",
                "description": "Post Case",
                "abbreviation": "PCS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::WinLossAnalysis",
              "name": "win_loss_analysis",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Surveys::WinLossAnalysisSurvey",
                "description": "Win Loss Analysis",
                "abbreviation": "WLA"
              }
            }
          ],
          "values": [
            "freeform",
            "nps",
            "post_case",
            "win_loss_analysis"
          ]
        },
        "custom_fields": {
          "source": "Census::Surveys::PostCaseSurvey::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "subject_name": {
              "name": "subject_name",
              "source": "Census::Surveys::PostCaseSurvey::Fields::CustomFields::Fields::SubjectName",
              "type": "string"
            },
            "questions_order": {
              "name": "questions_order",
              "source": "Census::Survey::Fields::CustomFields::Fields::QuestionsOrder",
              "type": "array"
            }
          }
        },
        "settings": {
          "source": "Census::Surveys::PostCaseSurvey::Fields::Settings",
          "name": "settings",
          "type": "struct",
          "fields": {
            "requires_signatures_to_advance": [
              true,
              false
            ],
            "admin_color": {
              "name": "admin_color",
              "source": "Census::Surveys::PostCaseSurvey::Fields::Settings::Fields::AdminColor",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Ui::Fields::Color::Red",
                  "name": "red",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "hex": "#db2828",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Orange",
                  "name": "orange",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "hex": "#f2711c",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Yellow",
                  "name": "yellow",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "hex": "#fbbd08",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Olive",
                  "name": "olive",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "hex": "#b5cc18",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Green",
                  "name": "green",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                    "hex": "#21ba45",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Teal",
                  "name": "teal",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                    "hex": "#00b5ad",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Blue",
                  "name": "blue",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                    "hex": "#2185d0",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Violet",
                  "name": "violet",
                  "type": "enum_value",
                  "integer_value": 8,
                  "attributes": {
                    "hex": "#6435c9",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Purple",
                  "name": "purple",
                  "type": "enum_value",
                  "integer_value": 9,
                  "attributes": {
                    "hex": "#a333c8",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Grey",
                  "name": "grey",
                  "type": "enum_value",
                  "integer_value": 10,
                  "attributes": {
                    "hex": "#767676",
                    "contrast": "white"
                  }
                }
              ],
              "values": [
                "red",
                "orange",
                "yellow",
                "olive",
                "green",
                "teal",
                "blue",
                "violet",
                "purple",
                "grey"
              ]
            }
          }
        },
        "import_data": {
          "source": "Census::Surveys::PostCaseSurvey::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Surveys::PostCaseSurvey::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Surveys::PostCaseSurvey::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "survey_reaction_id": {
              "name": "survey_reaction_id",
              "source": "Census::Surveys::PostCaseSurvey::Fields::ImportData::Fields::SurveyReactionId",
              "type": "integer"
            },
            "survey_stream_id": {
              "name": "survey_stream_id",
              "source": "Census::Surveys::PostCaseSurvey::Fields::ImportData::Fields::SurveyStreamId",
              "type": "string"
            },
            "survey_data": {
              "name": "survey_data",
              "source": "Census::Surveys::PostCaseSurvey::Fields::ImportData::Fields::SurveyData",
              "type": "json"
            }
          }
        }
      },
      "WinLossAnalysisSurvey": {
        "status": {
          "name": "status",
          "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status::Draft",
              "name": "draft",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status::AwaitingApproval",
              "name": "awaiting_approval",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status::Approved",
              "name": "approved",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status::Open",
              "name": "open",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status::Closed",
              "name": "closed",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Status::Deleted",
              "name": "deleted",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            }
          ],
          "values": [
            "draft",
            "awaiting_approval",
            "approved",
            "scheduled",
            "open",
            "closed",
            "deleted"
          ]
        },
        "default_locale": {
          "name": "default_locale",
          "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::DefaultLocale",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Fields::Locale::Cs",
              "name": "cs",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Da",
              "name": "da",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::De",
              "name": "de",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::El",
              "name": "el",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::En",
              "name": "en",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnAu",
              "name": "en_au",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnCa",
              "name": "en_ca",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnGb",
              "name": "en_gb",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::EnUs",
              "name": "en_us",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Es",
              "name": "es",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Et",
              "name": "et",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fi",
              "name": "fi",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Fr",
              "name": "fr",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Hu",
              "name": "hu",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Is",
              "name": "is",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::It",
              "name": "it",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nb",
              "name": "nb",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Nl",
              "name": "nl",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pl",
              "name": "pl",
              "type": "enum_value",
              "integer_value": 19,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Pt",
              "name": "pt",
              "type": "enum_value",
              "integer_value": 20,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Ro",
              "name": "ro",
              "type": "enum_value",
              "integer_value": 21,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sk",
              "name": "sk",
              "type": "enum_value",
              "integer_value": 22,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Fields::Locale::Sv",
              "name": "sv",
              "type": "enum_value",
              "integer_value": 23,
              "attributes": {
              }
            }
          ],
          "values": [
            "cs",
            "da",
            "de",
            "el",
            "en",
            "en_au",
            "en_ca",
            "en_gb",
            "en_us",
            "es",
            "et",
            "fi",
            "fr",
            "hu",
            "is",
            "it",
            "nb",
            "nl",
            "pl",
            "pt",
            "ro",
            "sk",
            "sv"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Freeform",
              "name": "freeform",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Census::Surveys::FreeformSurvey",
                "description": "Freeform",
                "abbreviation": "FFM"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::Nps",
              "name": "nps",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Census::Surveys::NpsSurvey",
                "description": "Net Promoter Score",
                "abbreviation": "NPS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::PostCase",
              "name": "post_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Census::Surveys::PostCaseSurvey",
                "description": "Post Case",
                "abbreviation": "PCS"
              }
            },
            {
              "source": "Kore::Types::Census::Survey::Fields::Kind::WinLossAnalysis",
              "name": "win_loss_analysis",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Census::Surveys::WinLossAnalysisSurvey",
                "description": "Win Loss Analysis",
                "abbreviation": "WLA"
              }
            }
          ],
          "values": [
            "freeform",
            "nps",
            "post_case",
            "win_loss_analysis"
          ]
        },
        "custom_fields": {
          "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "company_name": {
              "name": "company_name",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::CustomFields::Fields::CompanyName",
              "type": "string"
            },
            "subject_name": {
              "name": "subject_name",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::CustomFields::Fields::SubjectName",
              "type": "string"
            },
            "questions_order": {
              "name": "questions_order",
              "source": "Census::Survey::Fields::CustomFields::Fields::QuestionsOrder",
              "type": "array"
            }
          }
        },
        "settings": {
          "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Settings",
          "name": "settings",
          "type": "struct",
          "fields": {
            "requires_signatures_to_advance": [
              true,
              false
            ],
            "admin_color": {
              "name": "admin_color",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::Settings::Fields::AdminColor",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Ui::Fields::Color::Red",
                  "name": "red",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "hex": "#db2828",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Orange",
                  "name": "orange",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "hex": "#f2711c",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Yellow",
                  "name": "yellow",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "hex": "#fbbd08",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Olive",
                  "name": "olive",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "hex": "#b5cc18",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Green",
                  "name": "green",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                    "hex": "#21ba45",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Teal",
                  "name": "teal",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                    "hex": "#00b5ad",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Blue",
                  "name": "blue",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                    "hex": "#2185d0",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Violet",
                  "name": "violet",
                  "type": "enum_value",
                  "integer_value": 8,
                  "attributes": {
                    "hex": "#6435c9",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Purple",
                  "name": "purple",
                  "type": "enum_value",
                  "integer_value": 9,
                  "attributes": {
                    "hex": "#a333c8",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Grey",
                  "name": "grey",
                  "type": "enum_value",
                  "integer_value": 10,
                  "attributes": {
                    "hex": "#767676",
                    "contrast": "white"
                  }
                }
              ],
              "values": [
                "red",
                "orange",
                "yellow",
                "olive",
                "green",
                "teal",
                "blue",
                "violet",
                "purple",
                "grey"
              ]
            }
          }
        },
        "import_data": {
          "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::ImportData",
          "name": "import_data",
          "type": "struct",
          "fields": {
            "imported_at": {
              "name": "imported_at",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::ImportData::Fields::ImportedAt",
              "type": "time"
            },
            "notes": {
              "name": "notes",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::ImportData::Fields::Notes",
              "type": "array"
            },
            "survey_reaction_id": {
              "name": "survey_reaction_id",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::ImportData::Fields::SurveyReactionId",
              "type": "integer"
            },
            "survey_stream_id": {
              "name": "survey_stream_id",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::ImportData::Fields::SurveyStreamId",
              "type": "string"
            },
            "survey_data": {
              "name": "survey_data",
              "source": "Census::Surveys::WinLossAnalysisSurvey::Fields::ImportData::Fields::SurveyData",
              "type": "json"
            }
          }
        }
      }
    }
  },
  "Client": {
    "AccessGroup": {
      "whitelist_user_ids": null,
      "blacklist_user_ids": null
    },
    "Account": {
      "kind": {
        "name": "kind",
        "source": "Client::Account::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Client::Account::Fields::Kind::Salesforce",
            "name": "salesforce",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Client::Accounts::SalesforceAccount",
              "integration": "salesforce"
            }
          },
          {
            "source": "Kore::Types::Client::Account::Fields::Kind::Reaction",
            "name": "reaction",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Client::Accounts::ReactionAccount",
              "integration": "reaction"
            }
          },
          {
            "source": "Kore::Types::Client::Account::Fields::Kind::Email",
            "name": "email",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Client::Accounts::EmailAccount",
              "integration": "mandrill"
            }
          }
        ],
        "values": [
          "salesforce",
          "reaction",
          "email"
        ]
      },
      "custom_fields": {
        "source": "Client::Account::Fields::CustomFields",
        "name": "custom_fields",
        "type": "struct",
        "fields": {
          "is_active": [
            true,
            false
          ]
        }
      },
      "types": [
        "Client::Accounts::EmailAccount",
        "Client::Accounts::ReactionAccount",
        "Client::Accounts::SalesforceAccount"
      ]
    },
    "Accounts": {
      "EmailAccount": {
        "kind": {
          "name": "kind",
          "source": "Client::Accounts::EmailAccount::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Salesforce",
              "name": "salesforce",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Accounts::SalesforceAccount",
                "integration": "salesforce"
              }
            },
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Reaction",
              "name": "reaction",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Accounts::ReactionAccount",
                "integration": "reaction"
              }
            },
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Email",
              "name": "email",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Accounts::EmailAccount",
                "integration": "mandrill"
              }
            }
          ],
          "values": [
            "salesforce",
            "reaction",
            "email"
          ]
        },
        "custom_fields": {
          "source": "Client::Accounts::EmailAccount::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "subaccount_created_successfully": [
              true,
              false
            ],
            "is_active": [
              true,
              false
            ]
          }
        }
      },
      "ReactionAccount": {
        "kind": {
          "name": "kind",
          "source": "Client::Accounts::ReactionAccount::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Salesforce",
              "name": "salesforce",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Accounts::SalesforceAccount",
                "integration": "salesforce"
              }
            },
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Reaction",
              "name": "reaction",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Accounts::ReactionAccount",
                "integration": "reaction"
              }
            },
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Email",
              "name": "email",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Accounts::EmailAccount",
                "integration": "mandrill"
              }
            }
          ],
          "values": [
            "salesforce",
            "reaction",
            "email"
          ]
        },
        "custom_fields": {
          "source": "Client::Accounts::ReactionAccount::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "encrypted_api_token": {
              "name": "encrypted_api_token",
              "source": "Client::Accounts::ReactionAccount::Fields::CustomFields::Fields::EncryptedApiToken",
              "type": "string"
            },
            "encrypted_api_token_salt": {
              "name": "encrypted_api_token_salt",
              "source": "Client::Accounts::ReactionAccount::Fields::CustomFields::Fields::EncryptedApiTokenSalt",
              "type": "string"
            },
            "encrypted_api_token_iv": {
              "name": "encrypted_api_token_iv",
              "source": "Client::Accounts::ReactionAccount::Fields::CustomFields::Fields::EncryptedApiTokenIv",
              "type": "string"
            },
            "is_active": [
              true,
              false
            ]
          }
        }
      },
      "SalesforceAccount": {
        "kind": {
          "name": "kind",
          "source": "Client::Accounts::SalesforceAccount::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Salesforce",
              "name": "salesforce",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Accounts::SalesforceAccount",
                "integration": "salesforce"
              }
            },
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Reaction",
              "name": "reaction",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Accounts::ReactionAccount",
                "integration": "reaction"
              }
            },
            {
              "source": "Kore::Types::Client::Account::Fields::Kind::Email",
              "name": "email",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Accounts::EmailAccount",
                "integration": "mandrill"
              }
            }
          ],
          "values": [
            "salesforce",
            "reaction",
            "email"
          ]
        },
        "custom_fields": {
          "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "email": {
              "name": "email",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::Email",
              "type": "string"
            },
            "oauth_token": {
              "name": "oauth_token",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::OauthToken",
              "type": "string"
            },
            "encrypted_refresh_token": {
              "name": "encrypted_refresh_token",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::EncryptedRefreshToken",
              "type": "string"
            },
            "encrypted_refresh_token_salt": {
              "name": "encrypted_refresh_token_salt",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::EncryptedRefreshTokenSalt",
              "type": "string"
            },
            "encrypted_refresh_token_iv": {
              "name": "encrypted_refresh_token_iv",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::EncryptedRefreshTokenIv",
              "type": "string"
            },
            "security_token": {
              "name": "security_token",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::SecurityToken",
              "type": "string"
            },
            "instance_url": {
              "name": "instance_url",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::InstanceUrl",
              "type": "string"
            },
            "include_custom_salesforce_fields": [
              true,
              false
            ],
            "model_schemas": {
              "name": "model_schemas",
              "source": "Client::Accounts::SalesforceAccount::Fields::CustomFields::Fields::ModelSchemas",
              "type": "array_of"
            },
            "is_active": [
              true,
              false
            ]
          }
        }
      }
    },
    "EmailConfig": {
    },
    "Organization": {
      "subscription_status": {
        "name": "subscription_status",
        "source": "Client::Organization::Fields::SubscriptionStatus",
        "type": "enum",
        "choices": [
          {
            "source": "Client::Organization::Fields::SubscriptionStatus::Demo",
            "name": "demo",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Client::Organization::Fields::SubscriptionStatus::Active",
            "name": "active",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Client::Organization::Fields::SubscriptionStatus::Inactive",
            "name": "inactive",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          }
        ],
        "values": [
          "demo",
          "active",
          "inactive"
        ]
      },
      "default_locale": {
        "name": "default_locale",
        "source": "Client::Organization::Fields::DefaultLocale",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Locale::Cs",
            "name": "cs",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Da",
            "name": "da",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::De",
            "name": "de",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::El",
            "name": "el",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::En",
            "name": "en",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnAu",
            "name": "en_au",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnCa",
            "name": "en_ca",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnGb",
            "name": "en_gb",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnUs",
            "name": "en_us",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Es",
            "name": "es",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Et",
            "name": "et",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fi",
            "name": "fi",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fr",
            "name": "fr",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Hu",
            "name": "hu",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Is",
            "name": "is",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::It",
            "name": "it",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nb",
            "name": "nb",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nl",
            "name": "nl",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pl",
            "name": "pl",
            "type": "enum_value",
            "integer_value": 19,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pt",
            "name": "pt",
            "type": "enum_value",
            "integer_value": 20,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Ro",
            "name": "ro",
            "type": "enum_value",
            "integer_value": 21,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sk",
            "name": "sk",
            "type": "enum_value",
            "integer_value": 22,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sv",
            "name": "sv",
            "type": "enum_value",
            "integer_value": 23,
            "attributes": {
            }
          }
        ],
        "values": [
          "cs",
          "da",
          "de",
          "el",
          "en",
          "en_au",
          "en_ca",
          "en_gb",
          "en_us",
          "es",
          "et",
          "fi",
          "fr",
          "hu",
          "is",
          "it",
          "nb",
          "nl",
          "pl",
          "pt",
          "ro",
          "sk",
          "sv"
        ]
      },
      "general_settings": {
        "source": "Client::Organization::Fields::GeneralSettings",
        "name": "general_settings",
        "type": "struct",
        "fields": {
          "has_translations_enabled": [
            true,
            false
          ],
          "participant_discovery_enabled": [
            true,
            false
          ]
        }
      },
      "email_display_settings": {
        "source": "Client::Organization::Fields::EmailDisplaySettings",
        "name": "email_display_settings",
        "type": "struct",
        "fields": {
          "start_button_background_color": {
            "name": "start_button_background_color",
            "source": "Client::Organization::Fields::EmailDisplaySettings::Fields::StartButtonBackgroundColor",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Ui::Fields::Color::Red",
                "name": "red",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "hex": "#db2828",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Orange",
                "name": "orange",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "hex": "#f2711c",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Yellow",
                "name": "yellow",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "hex": "#fbbd08",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Olive",
                "name": "olive",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "hex": "#b5cc18",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Green",
                "name": "green",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "hex": "#21ba45",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Teal",
                "name": "teal",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "hex": "#00b5ad",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Blue",
                "name": "blue",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "hex": "#2185d0",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Violet",
                "name": "violet",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "hex": "#6435c9",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Purple",
                "name": "purple",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "hex": "#a333c8",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Grey",
                "name": "grey",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "hex": "#767676",
                  "contrast": "white"
                }
              }
            ],
            "values": [
              "red",
              "orange",
              "yellow",
              "olive",
              "green",
              "teal",
              "blue",
              "violet",
              "purple",
              "grey"
            ]
          },
          "start_button_style": {
            "name": "start_button_style",
            "source": "Client::Organization::Fields::EmailDisplaySettings::Fields::StartButtonStyle",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::First",
                "name": "first",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "display": "inline-block",
                  "margin": "0.5em 0",
                  "padding": "12px 24px",
                  "font-weight": "400",
                  "line-height": "14px",
                  "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
                  "text-align": "center",
                  "text-decoration": "none",
                  "color": "#000000",
                  "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                  "font-size": "18px"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::Second",
                "name": "second",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "display": "inline-block",
                  "margin": "0.5em 0",
                  "padding": "8px 40px",
                  "font-weight": "300",
                  "line-height": 1,
                  "box-shadow": "0 0 0 1px transparent inset, 0 0 0 0 rgba(39, 41, 43, 0.15) inset",
                  "text-align": "center",
                  "text-decoration": "none",
                  "color": "#000000",
                  "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                  "font-size": "16px",
                  "letter-spacing": "1px",
                  "border-radius": "14px"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::Third",
                "name": "third",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "display": "inline-block",
                  "margin": "0.5em 0",
                  "padding": "14px 32px",
                  "font-weight": "500",
                  "line-height": 1,
                  "box-shadow": "0 8px 17px rgba(0, 0, 0, 0.2);",
                  "text-align": "center",
                  "text-decoration": "none",
                  "color": "#000000",
                  "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                  "font-size": "16px",
                  "letter-spacing": "1.5px",
                  "border-radius": "3px"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::Peer60",
                "name": "peer60",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "display": "inline-block",
                  "margin": "0.5em 0",
                  "padding": "10px 24px",
                  "font-weight": "400",
                  "line-height": 1,
                  "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
                  "text-align": "center",
                  "text-decoration": "none",
                  "color": "#000000",
                  "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                  "font-size": "18px",
                  "border-radius": "25px"
                }
              }
            ],
            "values": [
              "first",
              "second",
              "third",
              "peer60"
            ]
          }
        }
      },
      "survey_display_settings": {
        "source": "Client::Organization::Fields::SurveyDisplaySettings",
        "name": "survey_display_settings",
        "type": "struct",
        "fields": {
          "primary_palette": {
            "name": "primary_palette",
            "source": "Client::Organization::Fields::SurveyDisplaySettings::Fields::PrimaryPalette",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Ui::Fields::Color::Red",
                "name": "red",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "hex": "#db2828",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Orange",
                "name": "orange",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "hex": "#f2711c",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Yellow",
                "name": "yellow",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "hex": "#fbbd08",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Olive",
                "name": "olive",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "hex": "#b5cc18",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Green",
                "name": "green",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "hex": "#21ba45",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Teal",
                "name": "teal",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "hex": "#00b5ad",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Blue",
                "name": "blue",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "hex": "#2185d0",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Violet",
                "name": "violet",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "hex": "#6435c9",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Purple",
                "name": "purple",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "hex": "#a333c8",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Grey",
                "name": "grey",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "hex": "#767676",
                  "contrast": "white"
                }
              }
            ],
            "values": [
              "red",
              "orange",
              "yellow",
              "olive",
              "green",
              "teal",
              "blue",
              "violet",
              "purple",
              "grey"
            ]
          },
          "secondary_palette": {
            "name": "secondary_palette",
            "source": "Client::Organization::Fields::SurveyDisplaySettings::Fields::SecondaryPalette",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Ui::Fields::Color::Red",
                "name": "red",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "hex": "#db2828",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Orange",
                "name": "orange",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "hex": "#f2711c",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Yellow",
                "name": "yellow",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "hex": "#fbbd08",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Olive",
                "name": "olive",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "hex": "#b5cc18",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Green",
                "name": "green",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "hex": "#21ba45",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Teal",
                "name": "teal",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "hex": "#00b5ad",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Blue",
                "name": "blue",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "hex": "#2185d0",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Violet",
                "name": "violet",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "hex": "#6435c9",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Purple",
                "name": "purple",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "hex": "#a333c8",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Grey",
                "name": "grey",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "hex": "#767676",
                  "contrast": "white"
                }
              }
            ],
            "values": [
              "red",
              "orange",
              "yellow",
              "olive",
              "green",
              "teal",
              "blue",
              "violet",
              "purple",
              "grey"
            ]
          }
        }
      },
      "ui_settings": {
        "source": "Client::Organization::Fields::UiSettings",
        "name": "ui_settings",
        "type": "struct",
        "fields": {
          "nps_dashboard_enabled": [
            true,
            false
          ],
          "response_rate_dashboard_enabled": [
            true,
            false
          ]
        }
      },
      "supported_locales": {
        "source": "Client::Organization::Fields::SupportedLocales",
        "name": "supported_locales",
        "type": "struct",
        "fields": {
          "cs": [
            true,
            false
          ],
          "da": [
            true,
            false
          ],
          "de": [
            true,
            false
          ],
          "el": [
            true,
            false
          ],
          "en": [
            true,
            false
          ],
          "en_au": [
            true,
            false
          ],
          "en_ca": [
            true,
            false
          ],
          "en_gb": [
            true,
            false
          ],
          "en_us": [
            true,
            false
          ],
          "es": [
            true,
            false
          ],
          "et": [
            true,
            false
          ],
          "fi": [
            true,
            false
          ],
          "fr": [
            true,
            false
          ],
          "hu": [
            true,
            false
          ],
          "is": [
            true,
            false
          ],
          "it": [
            true,
            false
          ],
          "nb": [
            true,
            false
          ],
          "nl": [
            true,
            false
          ],
          "pl": [
            true,
            false
          ],
          "pt": [
            true,
            false
          ],
          "ro": [
            true,
            false
          ],
          "sk": [
            true,
            false
          ],
          "sv": [
            true,
            false
          ]
        }
      },
      "timezones": [
        "American Samoa",
        "International Date Line West",
        "Midway Island",
        "Samoa",
        "Hawaii",
        "Alaska",
        "Pacific Time (US & Canada)",
        "Tijuana",
        "Arizona",
        "Chihuahua",
        "Mazatlan",
        "Mountain Time (US & Canada)",
        "Central America",
        "Central Time (US & Canada)",
        "Guadalajara",
        "Mexico City",
        "Monterrey",
        "Saskatchewan",
        "Bogota",
        "Eastern Time (US & Canada)",
        "Indiana (East)",
        "Lima",
        "Quito",
        "Caracas",
        "Atlantic Time (Canada)",
        "Georgetown",
        "La Paz",
        "Newfoundland",
        "Brasilia",
        "Buenos Aires",
        "Greenland",
        "Montevideo",
        "Santiago",
        "Mid-Atlantic",
        "Azores",
        "Cape Verde Is.",
        "Casablanca",
        "Dublin",
        "Edinburgh",
        "Lisbon",
        "London",
        "Monrovia",
        "UTC",
        "Amsterdam",
        "Belgrade",
        "Berlin",
        "Bern",
        "Bratislava",
        "Brussels",
        "Budapest",
        "Copenhagen",
        "Ljubljana",
        "Madrid",
        "Paris",
        "Prague",
        "Rome",
        "Sarajevo",
        "Skopje",
        "Stockholm",
        "Vienna",
        "Warsaw",
        "West Central Africa",
        "Zagreb",
        "Athens",
        "Bucharest",
        "Cairo",
        "Harare",
        "Helsinki",
        "Istanbul",
        "Jerusalem",
        "Kaliningrad",
        "Kyiv",
        "Pretoria",
        "Riga",
        "Sofia",
        "Tallinn",
        "Vilnius",
        "Baghdad",
        "Kuwait",
        "Minsk",
        "Moscow",
        "Nairobi",
        "Riyadh",
        "St. Petersburg",
        "Volgograd",
        "Tehran",
        "Abu Dhabi",
        "Baku",
        "Muscat",
        "Samara",
        "Tbilisi",
        "Yerevan",
        "Kabul",
        "Ekaterinburg",
        "Islamabad",
        "Karachi",
        "Tashkent",
        "Chennai",
        "Kolkata",
        "Mumbai",
        "New Delhi",
        "Sri Jayawardenepura",
        "Kathmandu",
        "Almaty",
        "Astana",
        "Dhaka",
        "Novosibirsk",
        "Urumqi",
        "Rangoon",
        "Bangkok",
        "Hanoi",
        "Jakarta",
        "Krasnoyarsk",
        "Beijing",
        "Chongqing",
        "Hong Kong",
        "Irkutsk",
        "Kuala Lumpur",
        "Perth",
        "Singapore",
        "Taipei",
        "Ulaanbaatar",
        "Osaka",
        "Sapporo",
        "Seoul",
        "Tokyo",
        "Yakutsk",
        "Adelaide",
        "Darwin",
        "Brisbane",
        "Canberra",
        "Guam",
        "Hobart",
        "Magadan",
        "Melbourne",
        "Port Moresby",
        "Sydney",
        "Vladivostok",
        "New Caledonia",
        "Solomon Is.",
        "Srednekolymsk",
        "Auckland",
        "Fiji",
        "Kamchatka",
        "Marshall Is.",
        "Wellington",
        "Chatham Is.",
        "Nuku'alofa",
        "Tokelau Is."
      ]
    },
    "Permission": {
      "kind": {
        "name": "kind",
        "source": "Client::Permission::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
            "name": "reporting",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Client::Permissions::ForReporting"
            }
          },
          {
            "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
            "name": "report",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Client::Permissions::ForReport",
              "resource_type": "Warehouse::Report"
            }
          },
          {
            "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
            "name": "survey",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Client::Permissions::ForSurvey",
              "resource_type": "Census::Survey"
            }
          },
          {
            "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
            "name": "group",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "type": "Client::Permissions::ForGroup",
              "resource_type": "Census::Group"
            }
          },
          {
            "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
            "name": "participant",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "type": "Client::Permissions::ForParticipant",
              "resource_type": "Census::Participant"
            }
          },
          {
            "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
            "name": "trigger",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "type": "Client::Permissions::ForTrigger",
              "resource_type": "Portal::Trigger"
            }
          },
          {
            "source": "Kore::Types::Client::Permission::Fields::Kind::User",
            "name": "user",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "type": "Client::Permissions::ForUser",
              "resource_type": "Client::User"
            }
          }
        ],
        "values": [
          "reporting",
          "report",
          "survey",
          "group",
          "participant",
          "trigger",
          "user"
        ]
      },
      "can": {
        "source": "Client::Permission::Fields::Can",
        "name": "can",
        "type": "struct",
        "fields": {
          "create": [
            true,
            false
          ],
          "read": [
            true,
            false
          ],
          "update": [
            true,
            false
          ],
          "delete": [
            true,
            false
          ]
        }
      },
      "types": [
        "Client::Permissions::ForGroup",
        "Client::Permissions::ForParticipant",
        "Client::Permissions::ForReport",
        "Client::Permissions::ForReporting",
        "Client::Permissions::ForSurvey",
        "Client::Permissions::ForTrigger",
        "Client::Permissions::ForUser"
      ]
    },
    "Permissions": {
      "ForGroup": {
        "kind": {
          "name": "kind",
          "source": "Client::Permissions::ForGroup::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
              "name": "reporting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Permissions::ForReporting"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
              "name": "report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Permissions::ForReport",
                "resource_type": "Warehouse::Report"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
              "name": "survey",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Permissions::ForSurvey",
                "resource_type": "Census::Survey"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
              "name": "group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Client::Permissions::ForGroup",
                "resource_type": "Census::Group"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
              "name": "participant",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Client::Permissions::ForParticipant",
                "resource_type": "Census::Participant"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
              "name": "trigger",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Client::Permissions::ForTrigger",
                "resource_type": "Portal::Trigger"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::User",
              "name": "user",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Client::Permissions::ForUser",
                "resource_type": "Client::User"
              }
            }
          ],
          "values": [
            "reporting",
            "report",
            "survey",
            "group",
            "participant",
            "trigger",
            "user"
          ]
        },
        "can": {
          "source": "Client::Permissions::ForGroup::Fields::Can",
          "name": "can",
          "type": "struct",
          "fields": {
            "create": [
              true,
              false
            ],
            "read": [
              true,
              false
            ],
            "update": [
              true,
              false
            ],
            "delete": [
              true,
              false
            ]
          }
        }
      },
      "ForParticipant": {
        "kind": {
          "name": "kind",
          "source": "Client::Permissions::ForParticipant::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
              "name": "reporting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Permissions::ForReporting"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
              "name": "report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Permissions::ForReport",
                "resource_type": "Warehouse::Report"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
              "name": "survey",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Permissions::ForSurvey",
                "resource_type": "Census::Survey"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
              "name": "group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Client::Permissions::ForGroup",
                "resource_type": "Census::Group"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
              "name": "participant",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Client::Permissions::ForParticipant",
                "resource_type": "Census::Participant"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
              "name": "trigger",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Client::Permissions::ForTrigger",
                "resource_type": "Portal::Trigger"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::User",
              "name": "user",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Client::Permissions::ForUser",
                "resource_type": "Client::User"
              }
            }
          ],
          "values": [
            "reporting",
            "report",
            "survey",
            "group",
            "participant",
            "trigger",
            "user"
          ]
        },
        "can": {
          "source": "Client::Permissions::ForParticipant::Fields::Can",
          "name": "can",
          "type": "struct",
          "fields": {
            "create": [
              true,
              false
            ],
            "read": [
              true,
              false
            ],
            "update": [
              true,
              false
            ],
            "delete": [
              true,
              false
            ]
          }
        }
      },
      "ForReport": {
        "kind": {
          "name": "kind",
          "source": "Client::Permissions::ForReport::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
              "name": "reporting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Permissions::ForReporting"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
              "name": "report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Permissions::ForReport",
                "resource_type": "Warehouse::Report"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
              "name": "survey",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Permissions::ForSurvey",
                "resource_type": "Census::Survey"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
              "name": "group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Client::Permissions::ForGroup",
                "resource_type": "Census::Group"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
              "name": "participant",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Client::Permissions::ForParticipant",
                "resource_type": "Census::Participant"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
              "name": "trigger",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Client::Permissions::ForTrigger",
                "resource_type": "Portal::Trigger"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::User",
              "name": "user",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Client::Permissions::ForUser",
                "resource_type": "Client::User"
              }
            }
          ],
          "values": [
            "reporting",
            "report",
            "survey",
            "group",
            "participant",
            "trigger",
            "user"
          ]
        },
        "can": {
          "source": "Client::Permissions::ForReport::Fields::Can",
          "name": "can",
          "type": "struct",
          "fields": {
            "create": [
              true,
              false
            ],
            "read": [
              true,
              false
            ],
            "update": [
              true,
              false
            ],
            "delete": [
              true,
              false
            ]
          }
        }
      },
      "ForReporting": {
        "kind": {
          "name": "kind",
          "source": "Client::Permissions::ForReporting::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
              "name": "reporting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Permissions::ForReporting"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
              "name": "report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Permissions::ForReport",
                "resource_type": "Warehouse::Report"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
              "name": "survey",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Permissions::ForSurvey",
                "resource_type": "Census::Survey"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
              "name": "group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Client::Permissions::ForGroup",
                "resource_type": "Census::Group"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
              "name": "participant",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Client::Permissions::ForParticipant",
                "resource_type": "Census::Participant"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
              "name": "trigger",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Client::Permissions::ForTrigger",
                "resource_type": "Portal::Trigger"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::User",
              "name": "user",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Client::Permissions::ForUser",
                "resource_type": "Client::User"
              }
            }
          ],
          "values": [
            "reporting",
            "report",
            "survey",
            "group",
            "participant",
            "trigger",
            "user"
          ]
        },
        "can": {
          "source": "Client::Permissions::ForReporting::Fields::Can",
          "name": "can",
          "type": "struct",
          "fields": {
            "access_data": [
              true,
              false
            ],
            "download_with_limit": [
              true,
              false
            ],
            "download_without_limit": [
              true,
              false
            ],
            "explore": [
              true,
              false
            ],
            "see_user_dashboards": [
              true,
              false
            ],
            "see_lookml_dashboards": [
              true,
              false
            ],
            "see_looks": [
              true,
              false
            ],
            "login_to_looker": [
              true,
              false
            ]
          }
        }
      },
      "ForSurvey": {
        "kind": {
          "name": "kind",
          "source": "Client::Permissions::ForSurvey::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
              "name": "reporting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Permissions::ForReporting"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
              "name": "report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Permissions::ForReport",
                "resource_type": "Warehouse::Report"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
              "name": "survey",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Permissions::ForSurvey",
                "resource_type": "Census::Survey"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
              "name": "group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Client::Permissions::ForGroup",
                "resource_type": "Census::Group"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
              "name": "participant",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Client::Permissions::ForParticipant",
                "resource_type": "Census::Participant"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
              "name": "trigger",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Client::Permissions::ForTrigger",
                "resource_type": "Portal::Trigger"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::User",
              "name": "user",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Client::Permissions::ForUser",
                "resource_type": "Client::User"
              }
            }
          ],
          "values": [
            "reporting",
            "report",
            "survey",
            "group",
            "participant",
            "trigger",
            "user"
          ]
        },
        "can": {
          "source": "Client::Permissions::ForSurvey::Fields::Can",
          "name": "can",
          "type": "struct",
          "fields": {
            "create": [
              true,
              false
            ],
            "read": [
              true,
              false
            ],
            "update": [
              true,
              false
            ],
            "delete": [
              true,
              false
            ]
          }
        }
      },
      "ForTrigger": {
        "kind": {
          "name": "kind",
          "source": "Client::Permissions::ForTrigger::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
              "name": "reporting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Permissions::ForReporting"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
              "name": "report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Permissions::ForReport",
                "resource_type": "Warehouse::Report"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
              "name": "survey",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Permissions::ForSurvey",
                "resource_type": "Census::Survey"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
              "name": "group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Client::Permissions::ForGroup",
                "resource_type": "Census::Group"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
              "name": "participant",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Client::Permissions::ForParticipant",
                "resource_type": "Census::Participant"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
              "name": "trigger",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Client::Permissions::ForTrigger",
                "resource_type": "Portal::Trigger"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::User",
              "name": "user",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Client::Permissions::ForUser",
                "resource_type": "Client::User"
              }
            }
          ],
          "values": [
            "reporting",
            "report",
            "survey",
            "group",
            "participant",
            "trigger",
            "user"
          ]
        },
        "can": {
          "source": "Client::Permissions::ForTrigger::Fields::Can",
          "name": "can",
          "type": "struct",
          "fields": {
            "create": [
              true,
              false
            ],
            "read": [
              true,
              false
            ],
            "update": [
              true,
              false
            ],
            "delete": [
              true,
              false
            ]
          }
        }
      },
      "ForUser": {
        "kind": {
          "name": "kind",
          "source": "Client::Permissions::ForUser::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
              "name": "reporting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Client::Permissions::ForReporting"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
              "name": "report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Client::Permissions::ForReport",
                "resource_type": "Warehouse::Report"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
              "name": "survey",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Client::Permissions::ForSurvey",
                "resource_type": "Census::Survey"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
              "name": "group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Client::Permissions::ForGroup",
                "resource_type": "Census::Group"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
              "name": "participant",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Client::Permissions::ForParticipant",
                "resource_type": "Census::Participant"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
              "name": "trigger",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Client::Permissions::ForTrigger",
                "resource_type": "Portal::Trigger"
              }
            },
            {
              "source": "Kore::Types::Client::Permission::Fields::Kind::User",
              "name": "user",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Client::Permissions::ForUser",
                "resource_type": "Client::User"
              }
            }
          ],
          "values": [
            "reporting",
            "report",
            "survey",
            "group",
            "participant",
            "trigger",
            "user"
          ]
        },
        "can": {
          "source": "Client::Permissions::ForUser::Fields::Can",
          "name": "can",
          "type": "struct",
          "fields": {
            "create": [
              true,
              false
            ],
            "read": [
              true,
              false
            ],
            "update": [
              true,
              false
            ],
            "delete": [
              true,
              false
            ]
          }
        }
      }
    },
    "ReportingSubscription": {
    },
    "SendingDomain": {
    },
    "User": {
      "role": {
        "name": "role",
        "source": "Client::User::Fields::Role",
        "type": "enum",
        "choices": [
          {
            "source": "Client::User::Fields::Role::Staff",
            "name": "staff",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Client::User::Fields::Role::Admin",
            "name": "admin",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Client::User::Fields::Role::OrganizationAdmin",
            "name": "organization_admin",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Client::User::Fields::Role::SuperAdmin",
            "name": "super_admin",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          }
        ],
        "values": [
          "staff",
          "admin",
          "organization_admin",
          "super_admin"
        ]
      }
    }
  },
  "Cms": {
    "Asset": {
      "kind": {
        "name": "kind",
        "source": "Cms::Asset::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Cms::Asset::Fields::Kind::Image",
            "name": "image",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Cms::Assets::Image"
            }
          }
        ],
        "values": [
          "image"
        ]
      },
      "types": [
        "Cms::Assets::Image"
      ]
    },
    "Assets": {
      "Image": {
        "kind": {
          "name": "kind",
          "source": "Cms::Assets::Image::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Cms::Asset::Fields::Kind::Image",
              "name": "image",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Cms::Assets::Image"
              }
            }
          ],
          "values": [
            "image"
          ]
        },
        "custom_fields": {
          "source": "Cms::Assets::Image::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "width": {
              "name": "width",
              "source": "Cms::Assets::Image::Fields::CustomFields::Fields::Width",
              "type": "integer"
            },
            "height": {
              "name": "height",
              "source": "Cms::Assets::Image::Fields::CustomFields::Fields::Height",
              "type": "integer"
            }
          }
        }
      }
    },
    "HelpTopic": {
    },
    "Tag": {
    },
    "Tagging": {
      "types": [
        "Cms::Taggings::QuestionTagging",
        "Cms::Taggings::SurveyTagging"
      ]
    },
    "Taggings": {
      "QuestionTagging": {
      },
      "SurveyTagging": {
      }
    }
  },
  "Crm": {
    "SalesforceAuthorization": {
    }
  },
  "Geo": {
    "Address": {
      "geocoding_status": {
        "name": "geocoding_status",
        "source": "Geo::Address::Fields::GeocodingStatus",
        "type": "enum",
        "choices": [
          {
            "source": "Geo::Address::Fields::GeocodingStatus::Unattempted",
            "name": "unattempted",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Geo::Address::Fields::GeocodingStatus::Success",
            "name": "success",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Geo::Address::Fields::GeocodingStatus::Failed",
            "name": "failed",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          }
        ],
        "values": [
          "unattempted",
          "success",
          "failed"
        ]
      }
    },
    "Location": {
    }
  },
  "Giza": {
    "Company": {
      "status": {
        "name": "status",
        "source": "Giza::Company::Fields::Status",
        "type": "enum",
        "choices": [
          {
            "source": "Giza::Company::Fields::Status::Operating",
            "name": "operating",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Giza::Company::Fields::Status::Private",
            "name": "private",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Giza::Company::Fields::Status::Closed",
            "name": "closed",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Giza::Company::Fields::Status::Ipo",
            "name": "ipo",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Giza::Company::Fields::Status::Public",
            "name": "public",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Giza::Company::Fields::Status::Aquired",
            "name": "aquired",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          }
        ],
        "values": [
          "operating",
          "private",
          "closed",
          "ipo",
          "public",
          "aquired"
        ]
      },
      "clearbit_discovery_status": {
        "name": "clearbit_discovery_status",
        "source": "Giza::Company::Fields::ClearbitDiscoveryStatus",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::JobStatus::Unattempted",
            "name": "unattempted",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Failure",
            "name": "failure",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Success",
            "name": "success",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Pending",
            "name": "pending",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          }
        ],
        "values": [
          "unattempted",
          "failure",
          "success",
          "pending"
        ]
      },
      "related_company_ids": null,
      "name": null,
      "domain": null,
      "site": {
        "source": "Giza::Company::Fields::Site",
        "name": "site",
        "type": "struct",
        "fields": {
          "url": {
            "name": "url",
            "source": "Giza::Company::Fields::Site::Fields::Url",
            "type": "string"
          },
          "blog_url": {
            "name": "blog_url",
            "source": "Giza::Company::Fields::Site::Fields::BlogUrl",
            "type": "string"
          },
          "jobs_url": {
            "name": "jobs_url",
            "source": "Giza::Company::Fields::Site::Fields::JobsUrl",
            "type": "string"
          },
          "title": {
            "name": "title",
            "source": "Giza::Company::Fields::Site::Fields::Title",
            "type": "string"
          },
          "phone_numbers": {
            "name": "phone_numbers",
            "source": "Giza::Company::Fields::Site::Fields::PhoneNumbers",
            "type": "set"
          },
          "email_addresses": {
            "name": "email_addresses",
            "source": "Giza::Company::Fields::Site::Fields::EmailAddresses",
            "type": "set"
          }
        }
      },
      "stats": {
        "source": "Giza::Company::Fields::Stats",
        "name": "stats",
        "type": "struct",
        "fields": {
          "number_of_employees": {
            "name": "number_of_employees",
            "source": "Giza::Company::Fields::Stats::Fields::NumberOfEmployees",
            "type": "integer"
          },
          "dollars_raised": {
            "name": "dollars_raised",
            "source": "Giza::Company::Fields::Stats::Fields::DollarsRaised",
            "type": "float"
          },
          "annual_revenue": {
            "name": "annual_revenue",
            "source": "Giza::Company::Fields::Stats::Fields::AnnualRevenue",
            "type": "float"
          },
          "price_to_earnings_ratio": {
            "name": "price_to_earnings_ratio",
            "source": "Giza::Company::Fields::Stats::Fields::PriceToEarningsRatio",
            "type": "float"
          },
          "alexa_us_rank": {
            "name": "alexa_us_rank",
            "source": "Giza::Company::Fields::Stats::Fields::AlexaUsRank",
            "type": "integer"
          },
          "alexa_global_rank": {
            "name": "alexa_global_rank",
            "source": "Giza::Company::Fields::Stats::Fields::AlexaGlobalRank",
            "type": "integer"
          },
          "google_rank": {
            "name": "google_rank",
            "source": "Giza::Company::Fields::Stats::Fields::GoogleRank",
            "type": "integer"
          },
          "market_cap": {
            "name": "market_cap",
            "source": "Giza::Company::Fields::Stats::Fields::MarketCap",
            "type": "integer"
          },
          "similarweb_traffic1_month": {
            "name": "similarweb_traffic1_month",
            "source": "Giza::Company::Fields::Stats::Fields::SimilarwebTraffic1Month",
            "type": "integer"
          },
          "similarweb_traffic6_month": {
            "name": "similarweb_traffic6_month",
            "source": "Giza::Company::Fields::Stats::Fields::SimilarwebTraffic6Month",
            "type": "integer"
          },
          "similarweb_traffic1_year": {
            "name": "similarweb_traffic1_year",
            "source": "Giza::Company::Fields::Stats::Fields::SimilarwebTraffic1Year",
            "type": "integer"
          }
        }
      },
      "crunchbase": {
        "source": "Giza::Company::Fields::Crunchbase",
        "name": "crunchbase",
        "type": "struct",
        "fields": {
          "handle": {
            "name": "handle",
            "source": "Giza::Company::Fields::Crunchbase::Fields::Handle",
            "type": "string"
          },
          "permalink": {
            "name": "permalink",
            "source": "Giza::Company::Fields::Crunchbase::Fields::Permalink",
            "type": "string"
          }
        }
      },
      "datafox": {
        "source": "Giza::Company::Fields::Datafox",
        "name": "datafox",
        "type": "struct",
        "fields": {
          "top_keywords": {
            "name": "top_keywords",
            "source": "Giza::Company::Fields::Datafox::Fields::TopKeywords",
            "type": "set"
          },
          "related_company_ids": {
            "name": "related_company_ids",
            "source": "Giza::Company::Fields::Datafox::Fields::RelatedCompanyIds",
            "type": "set"
          }
        }
      },
      "twitter": {
        "source": "Giza::Company::Fields::Twitter",
        "name": "twitter",
        "type": "struct",
        "fields": {
          "id": {
            "name": "id",
            "source": "Giza::Company::Fields::Twitter::Fields::Id",
            "type": "string"
          },
          "handle": {
            "name": "handle",
            "source": "Giza::Company::Fields::Twitter::Fields::Handle",
            "type": "string"
          },
          "number_of_followers": {
            "name": "number_of_followers",
            "source": "Giza::Company::Fields::Twitter::Fields::NumberOfFollowers",
            "type": "integer"
          }
        }
      },
      "linkedin": {
        "source": "Giza::Company::Fields::Linkedin",
        "name": "linkedin",
        "type": "struct",
        "fields": {
          "id": {
            "name": "id",
            "source": "Giza::Company::Fields::Linkedin::Fields::Id",
            "type": "string"
          },
          "handle": {
            "name": "handle",
            "source": "Giza::Company::Fields::Linkedin::Fields::Handle",
            "type": "string"
          },
          "number_of_followers": {
            "name": "number_of_followers",
            "source": "Giza::Company::Fields::Linkedin::Fields::NumberOfFollowers",
            "type": "integer"
          }
        }
      },
      "angellist": {
        "source": "Giza::Company::Fields::Angellist",
        "name": "angellist",
        "type": "struct",
        "fields": {
          "id": {
            "name": "id",
            "source": "Giza::Company::Fields::Angellist::Fields::Id",
            "type": "string"
          },
          "slug": {
            "name": "slug",
            "source": "Giza::Company::Fields::Angellist::Fields::Slug",
            "type": "string"
          },
          "handle": {
            "name": "handle",
            "source": "Giza::Company::Fields::Angellist::Fields::Handle",
            "type": "string"
          },
          "number_of_followers": {
            "name": "number_of_followers",
            "source": "Giza::Company::Fields::Angellist::Fields::NumberOfFollowers",
            "type": "integer"
          }
        }
      },
      "facebook": {
        "source": "Giza::Company::Fields::Facebook",
        "name": "facebook",
        "type": "struct",
        "fields": {
          "handle": {
            "name": "handle",
            "source": "Giza::Company::Fields::Facebook::Fields::Handle",
            "type": "string"
          }
        }
      },
      "googleplus": {
        "source": "Giza::Company::Fields::Googleplus",
        "name": "googleplus",
        "type": "struct",
        "fields": {
          "id": {
            "name": "id",
            "source": "Giza::Company::Fields::Googleplus::Fields::Id",
            "type": "string"
          }
        }
      },
      "profile": {
        "source": "Giza::Company::Fields::Profile",
        "name": "profile",
        "type": "struct",
        "fields": {
          "image_url": {
            "name": "image_url",
            "source": "Giza::Company::Fields::Profile::Fields::ImageUrl",
            "type": "string"
          },
          "short_description": {
            "name": "short_description",
            "source": "Giza::Company::Fields::Profile::Fields::ShortDescription",
            "type": "string"
          },
          "long_description": {
            "name": "long_description",
            "source": "Giza::Company::Fields::Profile::Fields::LongDescription",
            "type": "string"
          },
          "phone": {
            "name": "phone",
            "source": "Giza::Company::Fields::Profile::Fields::Phone",
            "type": "string"
          },
          "legal_name": {
            "name": "legal_name",
            "source": "Giza::Company::Fields::Profile::Fields::LegalName",
            "type": "string"
          },
          "ticker": {
            "name": "ticker",
            "source": "Giza::Company::Fields::Profile::Fields::Ticker",
            "type": "string"
          },
          "time_zone": {
            "name": "time_zone",
            "source": "Giza::Company::Fields::Profile::Fields::TimeZone",
            "type": "string"
          },
          "founded_on": {
            "name": "founded_on",
            "source": "Giza::Company::Fields::Profile::Fields::FoundedOn",
            "type": "time"
          },
          "utc_offset": {
            "name": "utc_offset",
            "source": "Giza::Company::Fields::Profile::Fields::UtcOffset",
            "type": "integer"
          },
          "domain_aliases": {
            "name": "domain_aliases",
            "source": "Giza::Company::Fields::Profile::Fields::DomainAliases",
            "type": "set"
          },
          "tech": {
            "name": "tech",
            "source": "Giza::Company::Fields::Profile::Fields::Tech",
            "type": "set"
          }
        }
      }
    },
    "CompanyCategory": {
    },
    "CompanyCategoryMembership": {
    },
    "IndustryClassification": {
      "sector": {
        "name": "sector",
        "source": "Giza::IndustryClassification::Fields::Sector",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Giza::Fields::Sector::ConsumerDiscretionary",
            "name": "consumer_discretionary",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "Consumer Discretionary"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Sector::ConsumerStaples",
            "name": "consumer_staples",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "Consumer Staples"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Sector::Energy",
            "name": "energy",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "Energy"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Sector::Financials",
            "name": "financials",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "Financials"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Sector::HealthCare",
            "name": "health_care",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "Health Care"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Sector::Industrials",
            "name": "industrials",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "label": "Industrials"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Sector::InformationTechnology",
            "name": "information_technology",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "label": "Information Technology"
            }
          }
        ],
        "values": [
          "consumer_discretionary",
          "consumer_staples",
          "energy",
          "financials",
          "health_care",
          "industrials",
          "information_technology"
        ]
      },
      "industry_group": {
        "name": "industry_group",
        "source": "Giza::IndustryClassification::Fields::IndustryGroup",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::AutomobilesAndComponents",
            "name": "automobiles_and_components",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "Automobiles & Components"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::Banks",
            "name": "banks",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "Banks"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::CapitalGoods",
            "name": "capital_goods",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "Capital Goods"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::CommercialAndProfessionalServices",
            "name": "commercial_and_professional_services",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "Commercial & Professional Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::ConsumerDurablesAndApparel",
            "name": "consumer_durables_and_apparel",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "Consumer Durables & Apparel"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::ConsumerServices",
            "name": "consumer_services",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "label": "Consumer Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::DiversifiedFinancials",
            "name": "diversified_financials",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "label": "Diversified Financials"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::Energy",
            "name": "energy",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
              "label": "Energy"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::FoodAndStaplesRetailing",
            "name": "food_and_staples_retailing",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
              "label": "Food & Staples Retailing"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::FoodBeverageAndTobacco",
            "name": "food_beverage_and_tobacco",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
              "label": "Food, Beverage & Tobacco"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::HealthCareEquipmentAndServices",
            "name": "health_care_equipment_and_services",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
              "label": "Health Care Equipment & Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::HouseholdAndPersonalProducts",
            "name": "household_and_personal_products",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
              "label": "Household & Personal Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::Insurance",
            "name": "insurance",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
              "label": "Insurance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::Media",
            "name": "media",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
              "label": "Media"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::PharmaceuticalsBiotechnologyAndLifeSciences",
            "name": "pharmaceuticals_biotechnology_and_life_sciences",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
              "label": "Pharmaceuticals, Biotechnology & Life Sciences"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::RealEstate",
            "name": "real_estate",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
              "label": "Real Estate"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::Retailing",
            "name": "retailing",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
              "label": "Retailing"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::SoftwareAndServices",
            "name": "software_and_services",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
              "label": "Software & Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::TechnologyHardwareAndEquipment",
            "name": "technology_hardware_and_equipment",
            "type": "enum_value",
            "integer_value": 19,
            "attributes": {
              "label": "Technology Hardware & Equipment"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::IndustryGroup::Transportation",
            "name": "transportation",
            "type": "enum_value",
            "integer_value": 20,
            "attributes": {
              "label": "Transportation"
            }
          }
        ],
        "values": [
          "automobiles_and_components",
          "banks",
          "capital_goods",
          "commercial_and_professional_services",
          "consumer_durables_and_apparel",
          "consumer_services",
          "diversified_financials",
          "energy",
          "food_and_staples_retailing",
          "food_beverage_and_tobacco",
          "health_care_equipment_and_services",
          "household_and_personal_products",
          "insurance",
          "media",
          "pharmaceuticals_biotechnology_and_life_sciences",
          "real_estate",
          "retailing",
          "software_and_services",
          "technology_hardware_and_equipment",
          "transportation"
        ]
      },
      "industry": {
        "name": "industry",
        "source": "Giza::IndustryClassification::Fields::Industry",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Giza::Fields::Industry::AerospaceAndDefense",
            "name": "aerospace_and_defense",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "Aerospace & Defense"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::AirFreightAndLogistics",
            "name": "air_freight_and_logistics",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "Air Freight & Logistics"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Airlines",
            "name": "airlines",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "Airlines"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::AutoComponents",
            "name": "auto_components",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "Auto Components"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Automobiles",
            "name": "automobiles",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "Automobiles"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Banks",
            "name": "banks",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "label": "Banks"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Beverages",
            "name": "beverages",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "label": "Beverages"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Biotechnology",
            "name": "biotechnology",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
              "label": "Biotechnology"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::BuildingProducts",
            "name": "building_products",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
              "label": "Building Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::CapitalMarkets",
            "name": "capital_markets",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
              "label": "Capital Markets"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::CommercialServicesAndSupplies",
            "name": "commercial_services_and_supplies",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
              "label": "Commercial Services & Supplies"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::ConstructionAndEngineering",
            "name": "construction_and_engineering",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
              "label": "Construction & Engineering"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::ConsumerFinance",
            "name": "consumer_finance",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
              "label": "Consumer Finance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Distributors",
            "name": "distributors",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
              "label": "Distributors"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::DiversifiedConsumerServices",
            "name": "diversified_consumer_services",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
              "label": "Diversified Consumer Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::DiversifiedFinancialServices",
            "name": "diversified_financial_services",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
              "label": "Diversified Financial Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::ElectricalEquipment",
            "name": "electrical_equipment",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
              "label": "Electrical Equipment"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::EnergyEquipmentAndServices",
            "name": "energy_equipment_and_services",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
              "label": "Energy Equipment & Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::FoodAndStaplesRetailing",
            "name": "food_and_staples_retailing",
            "type": "enum_value",
            "integer_value": 19,
            "attributes": {
              "label": "Food & Staples Retailing"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::FoodProducts",
            "name": "food_products",
            "type": "enum_value",
            "integer_value": 20,
            "attributes": {
              "label": "Food Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::HealthCareEquipmentAndSupplies",
            "name": "health_care_equipment_and_supplies",
            "type": "enum_value",
            "integer_value": 21,
            "attributes": {
              "label": "Health Care Equipment & Supplies"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::HealthCareProvidersAndServices",
            "name": "health_care_providers_and_services",
            "type": "enum_value",
            "integer_value": 22,
            "attributes": {
              "label": "Health Care Providers & Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::HotelsRestaurantsAndLeisure",
            "name": "hotels_restaurants_and_leisure",
            "type": "enum_value",
            "integer_value": 23,
            "attributes": {
              "label": "Hotels, Restaurants & Leisure"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::HouseholdDurables",
            "name": "household_durables",
            "type": "enum_value",
            "integer_value": 24,
            "attributes": {
              "label": "Household Durables"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::HouseholdProducts",
            "name": "household_products",
            "type": "enum_value",
            "integer_value": 25,
            "attributes": {
              "label": "Household Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::ItServices",
            "name": "it_services",
            "type": "enum_value",
            "integer_value": 26,
            "attributes": {
              "label": "IT Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Insurance",
            "name": "insurance",
            "type": "enum_value",
            "integer_value": 27,
            "attributes": {
              "label": "Insurance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::InternetAndCatalogRetail",
            "name": "internet_and_catalog_retail",
            "type": "enum_value",
            "integer_value": 28,
            "attributes": {
              "label": "Internet & Catalog Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::LeisureProducts",
            "name": "leisure_products",
            "type": "enum_value",
            "integer_value": 29,
            "attributes": {
              "label": "Leisure Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::LifeSciencesToolsAndServices",
            "name": "life_sciences_tools_and_services",
            "type": "enum_value",
            "integer_value": 30,
            "attributes": {
              "label": "Life Sciences Tools & Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Machinery",
            "name": "machinery",
            "type": "enum_value",
            "integer_value": 31,
            "attributes": {
              "label": "Machinery"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Marine",
            "name": "marine",
            "type": "enum_value",
            "integer_value": 32,
            "attributes": {
              "label": "Marine"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Media",
            "name": "media",
            "type": "enum_value",
            "integer_value": 33,
            "attributes": {
              "label": "Media"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::MultilineRetail",
            "name": "multiline_retail",
            "type": "enum_value",
            "integer_value": 34,
            "attributes": {
              "label": "Multiline Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::OilGasAndConsumableFuels",
            "name": "oil_gas_and_consumable_fuels",
            "type": "enum_value",
            "integer_value": 35,
            "attributes": {
              "label": "Oil, Gas & Consumable Fuels"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Pharmaceuticals",
            "name": "pharmaceuticals",
            "type": "enum_value",
            "integer_value": 36,
            "attributes": {
              "label": "Pharmaceuticals"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::ProfessionalServices",
            "name": "professional_services",
            "type": "enum_value",
            "integer_value": 37,
            "attributes": {
              "label": "Professional Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::RealEstateInvestmentTrusts",
            "name": "real_estate_investment_trusts",
            "type": "enum_value",
            "integer_value": 38,
            "attributes": {
              "label": "Real Estate Investment Trusts"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::RealEstateManagementAndDevelopment",
            "name": "real_estate_management_and_development",
            "type": "enum_value",
            "integer_value": 39,
            "attributes": {
              "label": "Real Estate Management & Development"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::RoadAndRail",
            "name": "road_and_rail",
            "type": "enum_value",
            "integer_value": 40,
            "attributes": {
              "label": "Road & Rail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Software",
            "name": "software",
            "type": "enum_value",
            "integer_value": 41,
            "attributes": {
              "label": "Software"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::SpecialityRetail",
            "name": "speciality_retail",
            "type": "enum_value",
            "integer_value": 42,
            "attributes": {
              "label": "Speciality Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::TechnologyHardwareStorageAndPeripherals",
            "name": "technology_hardware_storage_and_peripherals",
            "type": "enum_value",
            "integer_value": 43,
            "attributes": {
              "label": "Technology Hardware, Storage & Peripherals"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::TextilesApparelAndLuxuryGoods",
            "name": "textiles_apparel_and_luxury_goods",
            "type": "enum_value",
            "integer_value": 44,
            "attributes": {
              "label": "Textiles, Apparel & Luxury Goods"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::ThriftsAndMortgageFinance",
            "name": "thrifts_and_mortgage_finance",
            "type": "enum_value",
            "integer_value": 45,
            "attributes": {
              "label": "Thrifts & Mortgage Finance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::Tobacco",
            "name": "tobacco",
            "type": "enum_value",
            "integer_value": 46,
            "attributes": {
              "label": "Tobacco"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::Industry::TradingCompaniesAndDistributors",
            "name": "trading_companies_and_distributors",
            "type": "enum_value",
            "integer_value": 47,
            "attributes": {
              "label": "Trading Companies & Distributors"
            }
          }
        ],
        "values": [
          "aerospace_and_defense",
          "air_freight_and_logistics",
          "airlines",
          "auto_components",
          "automobiles",
          "banks",
          "beverages",
          "biotechnology",
          "building_products",
          "capital_markets",
          "commercial_services_and_supplies",
          "construction_and_engineering",
          "consumer_finance",
          "distributors",
          "diversified_consumer_services",
          "diversified_financial_services",
          "electrical_equipment",
          "energy_equipment_and_services",
          "food_and_staples_retailing",
          "food_products",
          "health_care_equipment_and_supplies",
          "health_care_providers_and_services",
          "hotels_restaurants_and_leisure",
          "household_durables",
          "household_products",
          "it_services",
          "insurance",
          "internet_and_catalog_retail",
          "leisure_products",
          "life_sciences_tools_and_services",
          "machinery",
          "marine",
          "media",
          "multiline_retail",
          "oil_gas_and_consumable_fuels",
          "pharmaceuticals",
          "professional_services",
          "real_estate_investment_trusts",
          "real_estate_management_and_development",
          "road_and_rail",
          "software",
          "speciality_retail",
          "technology_hardware_storage_and_peripherals",
          "textiles_apparel_and_luxury_goods",
          "thrifts_and_mortgage_finance",
          "tobacco",
          "trading_companies_and_distributors"
        ]
      },
      "sub_industry": {
        "name": "sub_industry",
        "source": "Giza::IndustryClassification::Fields::SubIndustry",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Advertisting",
            "name": "advertisting",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "label": "Advertisting"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::AerospaceAndDefense",
            "name": "aerospace_and_defense",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "label": "Aerospace & Defense"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::AgriculturalAndFarmMachinery",
            "name": "agricultural_and_farm_machinery",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "label": "Agricultural & Farm Machinery"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::AgriculturalProducts",
            "name": "agricultural_products",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "label": "Agricultural Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::AirFreightAndLogistics",
            "name": "air_freight_and_logistics",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "label": "Air Freight & Logistics"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Airlines",
            "name": "airlines",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "label": "Airlines"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ApparelRetail",
            "name": "apparel_retail",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "label": "Apparel Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::AssetManagementAndCustodyBanks",
            "name": "asset_management_and_custody_banks",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
              "label": "Asset Management & Custody Banks"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::AutomotiveRetail",
            "name": "automotive_retail",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
              "label": "Automotive Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Biotechnology",
            "name": "biotechnology",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
              "label": "Biotechnology"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Broadcasting",
            "name": "broadcasting",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
              "label": "Broadcasting"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::BuildingProducts",
            "name": "building_products",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
              "label": "Building Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::CableAndSatelite",
            "name": "cable_and_satelite",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
              "label": "Cable & Satelite"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::CasinosAndGaming",
            "name": "casinos_and_gaming",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
              "label": "Casinos & Gaming"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::CatalogRetail",
            "name": "catalog_retail",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
              "label": "Catalog Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::CoalAndConsumableFuelds",
            "name": "coal_and_consumable_fuelds",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
              "label": "Coal & Consumable Fuelds"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::CommercialPrinting",
            "name": "commercial_printing",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
              "label": "Commercial Printing"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ComputerAndElectronicsRetail",
            "name": "computer_and_electronics_retail",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
              "label": "Computer & Electronics Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ConstructionAndEngineering",
            "name": "construction_and_engineering",
            "type": "enum_value",
            "integer_value": 19,
            "attributes": {
              "label": "Construction & Engineering"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ConstructionMachineryAndHeavyTrucks",
            "name": "construction_machinery_and_heavy_trucks",
            "type": "enum_value",
            "integer_value": 20,
            "attributes": {
              "label": "Construction Machinery & Heavy Trucks"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ConsumerElectronics",
            "name": "consumer_electronics",
            "type": "enum_value",
            "integer_value": 21,
            "attributes": {
              "label": "Consumer Electronics"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ConsumerFinance",
            "name": "consumer_finance",
            "type": "enum_value",
            "integer_value": 22,
            "attributes": {
              "label": "Consumer Finance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::DepartmentStores",
            "name": "department_stores",
            "type": "enum_value",
            "integer_value": 23,
            "attributes": {
              "label": "Department Stores"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Distributors",
            "name": "distributors",
            "type": "enum_value",
            "integer_value": 24,
            "attributes": {
              "label": "Distributors"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::DiversifiedBanks",
            "name": "diversified_banks",
            "type": "enum_value",
            "integer_value": 25,
            "attributes": {
              "label": "Diversified Banks"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::DiversifiedSupportServices",
            "name": "diversified_support_services",
            "type": "enum_value",
            "integer_value": 26,
            "attributes": {
              "label": "Diversified Support Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ElectricalComponentsAndEquipment",
            "name": "electrical_components_and_equipment",
            "type": "enum_value",
            "integer_value": 27,
            "attributes": {
              "label": "Electrical Components & Equipment"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::EnvironmentalAndFacilitiesServices",
            "name": "environmental_and_facilities_services",
            "type": "enum_value",
            "integer_value": 28,
            "attributes": {
              "label": "Environmental & Facilities Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareEquipment",
            "name": "health_care_equipment",
            "type": "enum_value",
            "integer_value": 29,
            "attributes": {
              "label": "Health Care Equipment"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareFacilities",
            "name": "health_care_facilities",
            "type": "enum_value",
            "integer_value": 30,
            "attributes": {
              "label": "Health Care Facilities"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareServices",
            "name": "health_care_services",
            "type": "enum_value",
            "integer_value": 31,
            "attributes": {
              "label": "Health Care Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareSupplies",
            "name": "health_care_supplies",
            "type": "enum_value",
            "integer_value": 32,
            "attributes": {
              "label": "Health Care Supplies"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HeavyElectricalEquipment",
            "name": "heavy_electrical_equipment",
            "type": "enum_value",
            "integer_value": 33,
            "attributes": {
              "label": "Heavy Electrical Equipment"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HomeFurnishings",
            "name": "home_furnishings",
            "type": "enum_value",
            "integer_value": 34,
            "attributes": {
              "label": "Home Furnishings"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Homebuilding",
            "name": "homebuilding",
            "type": "enum_value",
            "integer_value": 35,
            "attributes": {
              "label": "Homebuilding"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HotelsResortsAndCruiseLines",
            "name": "hotels_resorts_and_cruise_lines",
            "type": "enum_value",
            "integer_value": 36,
            "attributes": {
              "label": "Hotels, Resorts & Cruise Lines"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::HypermarketsAndSuperCenters",
            "name": "hypermarkets_and_super_centers",
            "type": "enum_value",
            "integer_value": 37,
            "attributes": {
              "label": "Hypermarkets & Super Centers"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ItConsultingAndOtherServices",
            "name": "it_consulting_and_other_services",
            "type": "enum_value",
            "integer_value": 38,
            "attributes": {
              "label": "IT Consulting & Other Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::IndustrialMachinery",
            "name": "industrial_machinery",
            "type": "enum_value",
            "integer_value": 39,
            "attributes": {
              "label": "Industrial Machinery"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::InsuranceBrokers",
            "name": "insurance_brokers",
            "type": "enum_value",
            "integer_value": 40,
            "attributes": {
              "label": "Insurance Brokers"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::IntegratedOilAndGas",
            "name": "integrated_oil_and_gas",
            "type": "enum_value",
            "integer_value": 41,
            "attributes": {
              "label": "Integrated Oil & Gas"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::InternetRetail",
            "name": "internet_retail",
            "type": "enum_value",
            "integer_value": 42,
            "attributes": {
              "label": "Internet Retail"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::InvestmentBankingAndBrokerage",
            "name": "investment_banking_and_brokerage",
            "type": "enum_value",
            "integer_value": 43,
            "attributes": {
              "label": "Investment Banking & Brokerage"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::LeisureProducts",
            "name": "leisure_products",
            "type": "enum_value",
            "integer_value": 44,
            "attributes": {
              "label": "Leisure Products"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::LifeAndHealthInsurance",
            "name": "life_and_health_insurance",
            "type": "enum_value",
            "integer_value": 45,
            "attributes": {
              "label": "Life & Health Insurance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::LifeSciencesToolsAndServices",
            "name": "life_sciences_tools_and_services",
            "type": "enum_value",
            "integer_value": 46,
            "attributes": {
              "label": "Life Sciences Tools & Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ManagedHealthCare",
            "name": "managed_health_care",
            "type": "enum_value",
            "integer_value": 47,
            "attributes": {
              "label": "Managed Health Care"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Marine",
            "name": "marine",
            "type": "enum_value",
            "integer_value": 48,
            "attributes": {
              "label": "Marine"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::MoviesAndEntertainment",
            "name": "movies_and_entertainment",
            "type": "enum_value",
            "integer_value": 49,
            "attributes": {
              "label": "Movies & Entertainment"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::OfficeServicesAndSupplies",
            "name": "office_services_and_supplies",
            "type": "enum_value",
            "integer_value": 50,
            "attributes": {
              "label": "Office Services & Supplies"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::OilAndGasEquipmentAndServices",
            "name": "oil_and_gas_equipment_and_services",
            "type": "enum_value",
            "integer_value": 51,
            "attributes": {
              "label": "Oil & Gas Equipment & Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::OilAndGasExplorationAndProduction",
            "name": "oil_and_gas_exploration_and_production",
            "type": "enum_value",
            "integer_value": 52,
            "attributes": {
              "label": "Oil & Gas Exploration & Production"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::OilAndGasRefiningAndMarketing",
            "name": "oil_and_gas_refining_and_marketing",
            "type": "enum_value",
            "integer_value": 53,
            "attributes": {
              "label": "Oil & Gas Refining & Marketing"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::PackagedFoodAndMeats",
            "name": "packaged_food_and_meats",
            "type": "enum_value",
            "integer_value": 54,
            "attributes": {
              "label": "Packaged Food & Meats"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Pharmaceuticals",
            "name": "pharmaceuticals",
            "type": "enum_value",
            "integer_value": 55,
            "attributes": {
              "label": "Pharmaceuticals"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Publishing",
            "name": "publishing",
            "type": "enum_value",
            "integer_value": 56,
            "attributes": {
              "label": "Publishing"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Railroads",
            "name": "railroads",
            "type": "enum_value",
            "integer_value": 57,
            "attributes": {
              "label": "Railroads"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::RealEstateServices",
            "name": "real_estate_services",
            "type": "enum_value",
            "integer_value": 58,
            "attributes": {
              "label": "Real Estate Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Reinsurance",
            "name": "reinsurance",
            "type": "enum_value",
            "integer_value": 59,
            "attributes": {
              "label": "Reinsurance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Restaurants",
            "name": "restaurants",
            "type": "enum_value",
            "integer_value": 60,
            "attributes": {
              "label": "Restaurants"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::SecurityAndAlarmServices",
            "name": "security_and_alarm_services",
            "type": "enum_value",
            "integer_value": 61,
            "attributes": {
              "label": "Security & Alarm Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::SpecialityStores",
            "name": "speciality_stores",
            "type": "enum_value",
            "integer_value": 62,
            "attributes": {
              "label": "Speciality Stores"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::SpecializedConsumerServices",
            "name": "specialized_consumer_services",
            "type": "enum_value",
            "integer_value": 63,
            "attributes": {
              "label": "Specialized Consumer Services"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::SpecializedFinance",
            "name": "specialized_finance",
            "type": "enum_value",
            "integer_value": 64,
            "attributes": {
              "label": "Specialized Finance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::TechnologyHardwareStorageAndPeripherals",
            "name": "technology_hardware_storage_and_peripherals",
            "type": "enum_value",
            "integer_value": 65,
            "attributes": {
              "label": "Technology Hardware, Storage & Peripherals"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::ThriftsAndMortgageFinance",
            "name": "thrifts_and_mortgage_finance",
            "type": "enum_value",
            "integer_value": 66,
            "attributes": {
              "label": "Thrifts & Mortgage Finance"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Tobacco",
            "name": "tobacco",
            "type": "enum_value",
            "integer_value": 67,
            "attributes": {
              "label": "Tobacco"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::TradingCompaniesAndDistributors",
            "name": "trading_companies_and_distributors",
            "type": "enum_value",
            "integer_value": 68,
            "attributes": {
              "label": "Trading Companies & Distributors"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::Trucking",
            "name": "trucking",
            "type": "enum_value",
            "integer_value": 69,
            "attributes": {
              "label": "Trucking"
            }
          },
          {
            "source": "Kore::Types::Giza::Fields::SubIndustry::GroundTransportation",
            "name": "ground_transportation",
            "type": "enum_value",
            "integer_value": 70,
            "attributes": {
              "label": "Ground Transportation"
            }
          }
        ],
        "values": [
          "advertisting",
          "aerospace_and_defense",
          "agricultural_and_farm_machinery",
          "agricultural_products",
          "air_freight_and_logistics",
          "airlines",
          "apparel_retail",
          "asset_management_and_custody_banks",
          "automotive_retail",
          "biotechnology",
          "broadcasting",
          "building_products",
          "cable_and_satelite",
          "casinos_and_gaming",
          "catalog_retail",
          "coal_and_consumable_fuelds",
          "commercial_printing",
          "computer_and_electronics_retail",
          "construction_and_engineering",
          "construction_machinery_and_heavy_trucks",
          "consumer_electronics",
          "consumer_finance",
          "department_stores",
          "distributors",
          "diversified_banks",
          "diversified_support_services",
          "electrical_components_and_equipment",
          "environmental_and_facilities_services",
          "health_care_equipment",
          "health_care_facilities",
          "health_care_services",
          "health_care_supplies",
          "heavy_electrical_equipment",
          "home_furnishings",
          "homebuilding",
          "hotels_resorts_and_cruise_lines",
          "hypermarkets_and_super_centers",
          "it_consulting_and_other_services",
          "industrial_machinery",
          "insurance_brokers",
          "integrated_oil_and_gas",
          "internet_retail",
          "investment_banking_and_brokerage",
          "leisure_products",
          "life_and_health_insurance",
          "life_sciences_tools_and_services",
          "managed_health_care",
          "marine",
          "movies_and_entertainment",
          "office_services_and_supplies",
          "oil_and_gas_equipment_and_services",
          "oil_and_gas_exploration_and_production",
          "oil_and_gas_refining_and_marketing",
          "packaged_food_and_meats",
          "pharmaceuticals",
          "publishing",
          "railroads",
          "real_estate_services",
          "reinsurance",
          "restaurants",
          "security_and_alarm_services",
          "speciality_stores",
          "specialized_consumer_services",
          "specialized_finance",
          "technology_hardware_storage_and_peripherals",
          "thrifts_and_mortgage_finance",
          "tobacco",
          "trading_companies_and_distributors",
          "trucking",
          "ground_transportation"
        ]
      }
    },
    "Place": {
      "kind": {
        "name": "kind",
        "source": "Giza::Place::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Giza::Place::Fields::Kind::Bank",
            "name": "bank",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Giza::Places::Bank"
            }
          },
          {
            "source": "Kore::Types::Giza::Place::Fields::Kind::Hospital",
            "name": "hospital",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Giza::Places::Hospital"
            }
          }
        ],
        "values": [
          "bank",
          "hospital"
        ]
      },
      "types": [
        "Giza::Places::Bank",
        "Giza::Places::Hospital"
      ]
    },
    "Places": {
      "Bank": {
        "kind": {
          "name": "kind",
          "source": "Giza::Places::Bank::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Giza::Place::Fields::Kind::Bank",
              "name": "bank",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Giza::Places::Bank"
              }
            },
            {
              "source": "Kore::Types::Giza::Place::Fields::Kind::Hospital",
              "name": "hospital",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Giza::Places::Hospital"
              }
            }
          ],
          "values": [
            "bank",
            "hospital"
          ]
        },
        "custom_fields": {
          "source": "Giza::Places::Bank::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "bank_number_of_accounts": {
              "name": "bank_number_of_accounts",
              "source": "Giza::Places::Bank::Fields::CustomFields::Fields::BankNumberOfAccounts",
              "type": "integer"
            }
          }
        }
      },
      "Hospital": {
        "kind": {
          "name": "kind",
          "source": "Giza::Places::Hospital::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Giza::Place::Fields::Kind::Bank",
              "name": "bank",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Giza::Places::Bank"
              }
            },
            {
              "source": "Kore::Types::Giza::Place::Fields::Kind::Hospital",
              "name": "hospital",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Giza::Places::Hospital"
              }
            }
          ],
          "values": [
            "bank",
            "hospital"
          ]
        },
        "custom_fields": {
          "source": "Giza::Places::Hospital::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "hospital_number_of_beds": {
              "name": "hospital_number_of_beds",
              "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalNumberOfBeds",
              "type": "integer"
            },
            "hospital_number_of_doctors": {
              "name": "hospital_number_of_doctors",
              "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalNumberOfDoctors",
              "type": "integer"
            },
            "hospital_structure": {
              "name": "hospital_structure",
              "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalStructure",
              "type": "enum",
              "choices": [
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalStructure::Other",
                  "name": "other",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalStructure::Idn",
                  "name": "idn",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalStructure::Independent",
                  "name": "independent",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                  }
                }
              ],
              "values": [
                "other",
                "idn",
                "independent"
              ]
            },
            "hospital_type": {
              "name": "hospital_type",
              "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType",
              "type": "enum",
              "choices": [
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType::Other",
                  "name": "other",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType::AcademicHospital",
                  "name": "academic_hospital",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType::ChildrensHospital",
                  "name": "childrens_hospital",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType::ImagingCenter",
                  "name": "imaging_center",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType::TraditionalHospital",
                  "name": "traditional_hospital",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType::RehabilitationCenter",
                  "name": "rehabilitation_center",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalType::Psychiatric",
                  "name": "psychiatric",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                  }
                }
              ],
              "values": [
                "other",
                "academic_hospital",
                "childrens_hospital",
                "imaging_center",
                "traditional_hospital",
                "rehabilitation_center",
                "psychiatric"
              ]
            },
            "hospital_care_delivery_type": {
              "name": "hospital_care_delivery_type",
              "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalCareDeliveryType",
              "type": "enum",
              "choices": [
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalCareDeliveryType::Other",
                  "name": "other",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalCareDeliveryType::Acute",
                  "name": "acute",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalCareDeliveryType::Ambulatory",
                  "name": "ambulatory",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                  }
                },
                {
                  "source": "Giza::Places::Hospital::Fields::CustomFields::Fields::HospitalCareDeliveryType::Both",
                  "name": "both",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                  }
                }
              ],
              "values": [
                "other",
                "acute",
                "ambulatory",
                "both"
              ]
            }
          }
        }
      }
    },
    "Position": {
    }
  },
  "Newman": {
    "Email": {
      "status": {
        "name": "status",
        "source": "Newman::Email::Fields::Status",
        "type": "enum",
        "choices": [
          {
            "source": "Newman::Email::Fields::Status::Created",
            "name": "created",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Newman::Email::Fields::Status::Scheduled",
            "name": "scheduled",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Newman::Email::Fields::Status::Delivered",
            "name": "delivered",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Newman::Email::Fields::Status::Cancelled",
            "name": "cancelled",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Newman::Email::Fields::Status::Bounced",
            "name": "bounced",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          }
        ],
        "values": [
          "created",
          "scheduled",
          "delivered",
          "cancelled",
          "bounced"
        ]
      },
      "kind": {
        "name": "kind",
        "source": "Newman::Email::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyHeadsUp",
            "name": "survey_heads_up",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Newman::Emails::SurveyHeadsUpEmail"
            }
          },
          {
            "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLastCall",
            "name": "survey_last_call",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Newman::Emails::SurveyLastCallEmail"
            }
          },
          {
            "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLink",
            "name": "survey_link",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Newman::Emails::SurveyLinkEmail"
            }
          },
          {
            "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyReminder",
            "name": "survey_reminder",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "type": "Newman::Emails::SurveyReminderEmail"
            }
          }
        ],
        "values": [
          "survey_heads_up",
          "survey_last_call",
          "survey_link",
          "survey_reminder"
        ]
      },
      "translations_for_subject": {
        "source": "Newman::Email::Fields::TranslationsForSubject",
        "name": "translations_for_subject",
        "type": "struct",
        "fields": {
          "cs": {
            "name": "cs",
            "source": "Kore::Types::Fields::Translations::Fields::Cs",
            "type": "string"
          },
          "da": {
            "name": "da",
            "source": "Kore::Types::Fields::Translations::Fields::Da",
            "type": "string"
          },
          "de": {
            "name": "de",
            "source": "Kore::Types::Fields::Translations::Fields::De",
            "type": "string"
          },
          "el": {
            "name": "el",
            "source": "Kore::Types::Fields::Translations::Fields::El",
            "type": "string"
          },
          "en": {
            "name": "en",
            "source": "Kore::Types::Fields::Translations::Fields::En",
            "type": "string"
          },
          "en_au": {
            "name": "en_au",
            "source": "Kore::Types::Fields::Translations::Fields::EnAu",
            "type": "string"
          },
          "en_ca": {
            "name": "en_ca",
            "source": "Kore::Types::Fields::Translations::Fields::EnCa",
            "type": "string"
          },
          "en_gb": {
            "name": "en_gb",
            "source": "Kore::Types::Fields::Translations::Fields::EnGb",
            "type": "string"
          },
          "en_us": {
            "name": "en_us",
            "source": "Kore::Types::Fields::Translations::Fields::EnUs",
            "type": "string"
          },
          "es": {
            "name": "es",
            "source": "Kore::Types::Fields::Translations::Fields::Es",
            "type": "string"
          },
          "et": {
            "name": "et",
            "source": "Kore::Types::Fields::Translations::Fields::Et",
            "type": "string"
          },
          "fi": {
            "name": "fi",
            "source": "Kore::Types::Fields::Translations::Fields::Fi",
            "type": "string"
          },
          "fr": {
            "name": "fr",
            "source": "Kore::Types::Fields::Translations::Fields::Fr",
            "type": "string"
          },
          "hu": {
            "name": "hu",
            "source": "Kore::Types::Fields::Translations::Fields::Hu",
            "type": "string"
          },
          "is": {
            "name": "is",
            "source": "Kore::Types::Fields::Translations::Fields::Is",
            "type": "string"
          },
          "it": {
            "name": "it",
            "source": "Kore::Types::Fields::Translations::Fields::It",
            "type": "string"
          },
          "nb": {
            "name": "nb",
            "source": "Kore::Types::Fields::Translations::Fields::Nb",
            "type": "string"
          },
          "nl": {
            "name": "nl",
            "source": "Kore::Types::Fields::Translations::Fields::Nl",
            "type": "string"
          },
          "pl": {
            "name": "pl",
            "source": "Kore::Types::Fields::Translations::Fields::Pl",
            "type": "string"
          },
          "pt": {
            "name": "pt",
            "source": "Kore::Types::Fields::Translations::Fields::Pt",
            "type": "string"
          },
          "ro": {
            "name": "ro",
            "source": "Kore::Types::Fields::Translations::Fields::Ro",
            "type": "string"
          },
          "sk": {
            "name": "sk",
            "source": "Kore::Types::Fields::Translations::Fields::Sk",
            "type": "string"
          },
          "sv": {
            "name": "sv",
            "source": "Kore::Types::Fields::Translations::Fields::Sv",
            "type": "string"
          }
        }
      },
      "translations_for_body": {
        "source": "Newman::Email::Fields::TranslationsForBody",
        "name": "translations_for_body",
        "type": "struct",
        "fields": {
          "cs": {
            "name": "cs",
            "source": "Kore::Types::Fields::Translations::Fields::Cs",
            "type": "string"
          },
          "da": {
            "name": "da",
            "source": "Kore::Types::Fields::Translations::Fields::Da",
            "type": "string"
          },
          "de": {
            "name": "de",
            "source": "Kore::Types::Fields::Translations::Fields::De",
            "type": "string"
          },
          "el": {
            "name": "el",
            "source": "Kore::Types::Fields::Translations::Fields::El",
            "type": "string"
          },
          "en": {
            "name": "en",
            "source": "Kore::Types::Fields::Translations::Fields::En",
            "type": "string"
          },
          "en_au": {
            "name": "en_au",
            "source": "Kore::Types::Fields::Translations::Fields::EnAu",
            "type": "string"
          },
          "en_ca": {
            "name": "en_ca",
            "source": "Kore::Types::Fields::Translations::Fields::EnCa",
            "type": "string"
          },
          "en_gb": {
            "name": "en_gb",
            "source": "Kore::Types::Fields::Translations::Fields::EnGb",
            "type": "string"
          },
          "en_us": {
            "name": "en_us",
            "source": "Kore::Types::Fields::Translations::Fields::EnUs",
            "type": "string"
          },
          "es": {
            "name": "es",
            "source": "Kore::Types::Fields::Translations::Fields::Es",
            "type": "string"
          },
          "et": {
            "name": "et",
            "source": "Kore::Types::Fields::Translations::Fields::Et",
            "type": "string"
          },
          "fi": {
            "name": "fi",
            "source": "Kore::Types::Fields::Translations::Fields::Fi",
            "type": "string"
          },
          "fr": {
            "name": "fr",
            "source": "Kore::Types::Fields::Translations::Fields::Fr",
            "type": "string"
          },
          "hu": {
            "name": "hu",
            "source": "Kore::Types::Fields::Translations::Fields::Hu",
            "type": "string"
          },
          "is": {
            "name": "is",
            "source": "Kore::Types::Fields::Translations::Fields::Is",
            "type": "string"
          },
          "it": {
            "name": "it",
            "source": "Kore::Types::Fields::Translations::Fields::It",
            "type": "string"
          },
          "nb": {
            "name": "nb",
            "source": "Kore::Types::Fields::Translations::Fields::Nb",
            "type": "string"
          },
          "nl": {
            "name": "nl",
            "source": "Kore::Types::Fields::Translations::Fields::Nl",
            "type": "string"
          },
          "pl": {
            "name": "pl",
            "source": "Kore::Types::Fields::Translations::Fields::Pl",
            "type": "string"
          },
          "pt": {
            "name": "pt",
            "source": "Kore::Types::Fields::Translations::Fields::Pt",
            "type": "string"
          },
          "ro": {
            "name": "ro",
            "source": "Kore::Types::Fields::Translations::Fields::Ro",
            "type": "string"
          },
          "sk": {
            "name": "sk",
            "source": "Kore::Types::Fields::Translations::Fields::Sk",
            "type": "string"
          },
          "sv": {
            "name": "sv",
            "source": "Kore::Types::Fields::Translations::Fields::Sv",
            "type": "string"
          }
        }
      },
      "types": [
        "Newman::Emails::SurveyEmail"
      ]
    },
    "Emails": {
      "SurveyEmail": {
        "status": {
          "name": "status",
          "source": "Newman::Emails::SurveyEmail::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Emails::SurveyEmail::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyEmail::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyEmail::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyEmail::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyEmail::Fields::Status::Bounced",
              "name": "bounced",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "bounced"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Emails::SurveyEmail::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Emails::SurveyHeadsUpEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Emails::SurveyLastCallEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Emails::SurveyLinkEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Emails::SurveyReminderEmail"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        },
        "translations_for_subject": {
          "source": "Newman::Emails::SurveyEmail::Fields::TranslationsForSubject",
          "name": "translations_for_subject",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        },
        "translations_for_body": {
          "source": "Newman::Emails::SurveyEmail::Fields::TranslationsForBody",
          "name": "translations_for_body",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        },
        "types": [
          "Newman::Emails::SurveyHeadsUpEmail",
          "Newman::Emails::SurveyLastCallEmail",
          "Newman::Emails::SurveyLinkEmail",
          "Newman::Emails::SurveyReminderEmail"
        ]
      },
      "SurveyHeadsUpEmail": {
        "status": {
          "name": "status",
          "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::Status::Bounced",
              "name": "bounced",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "bounced"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Emails::SurveyHeadsUpEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Emails::SurveyLastCallEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Emails::SurveyLinkEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Emails::SurveyReminderEmail"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        },
        "translations_for_subject": {
          "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::TranslationsForSubject",
          "name": "translations_for_subject",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        },
        "translations_for_body": {
          "source": "Newman::Emails::SurveyHeadsUpEmail::Fields::TranslationsForBody",
          "name": "translations_for_body",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        }
      },
      "SurveyLastCallEmail": {
        "status": {
          "name": "status",
          "source": "Newman::Emails::SurveyLastCallEmail::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Emails::SurveyLastCallEmail::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLastCallEmail::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLastCallEmail::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLastCallEmail::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLastCallEmail::Fields::Status::Bounced",
              "name": "bounced",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "bounced"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Emails::SurveyLastCallEmail::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Emails::SurveyHeadsUpEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Emails::SurveyLastCallEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Emails::SurveyLinkEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Emails::SurveyReminderEmail"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        },
        "translations_for_subject": {
          "source": "Newman::Emails::SurveyLastCallEmail::Fields::TranslationsForSubject",
          "name": "translations_for_subject",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        },
        "translations_for_body": {
          "source": "Newman::Emails::SurveyLastCallEmail::Fields::TranslationsForBody",
          "name": "translations_for_body",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        }
      },
      "SurveyLinkEmail": {
        "status": {
          "name": "status",
          "source": "Newman::Emails::SurveyLinkEmail::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Emails::SurveyLinkEmail::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLinkEmail::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLinkEmail::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLinkEmail::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyLinkEmail::Fields::Status::Bounced",
              "name": "bounced",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "bounced"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Emails::SurveyLinkEmail::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Emails::SurveyHeadsUpEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Emails::SurveyLastCallEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Emails::SurveyLinkEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Emails::SurveyReminderEmail"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        },
        "translations_for_subject": {
          "source": "Newman::Emails::SurveyLinkEmail::Fields::TranslationsForSubject",
          "name": "translations_for_subject",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        },
        "translations_for_body": {
          "source": "Newman::Emails::SurveyLinkEmail::Fields::TranslationsForBody",
          "name": "translations_for_body",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        }
      },
      "SurveyReminderEmail": {
        "status": {
          "name": "status",
          "source": "Newman::Emails::SurveyReminderEmail::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Emails::SurveyReminderEmail::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyReminderEmail::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyReminderEmail::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyReminderEmail::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Emails::SurveyReminderEmail::Fields::Status::Bounced",
              "name": "bounced",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "bounced"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Emails::SurveyReminderEmail::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Emails::SurveyHeadsUpEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Emails::SurveyLastCallEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Emails::SurveyLinkEmail"
              }
            },
            {
              "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Emails::SurveyReminderEmail"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        },
        "translations_for_subject": {
          "source": "Newman::Emails::SurveyReminderEmail::Fields::TranslationsForSubject",
          "name": "translations_for_subject",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        },
        "translations_for_body": {
          "source": "Newman::Emails::SurveyReminderEmail::Fields::TranslationsForBody",
          "name": "translations_for_body",
          "type": "struct",
          "fields": {
            "cs": {
              "name": "cs",
              "source": "Kore::Types::Fields::Translations::Fields::Cs",
              "type": "string"
            },
            "da": {
              "name": "da",
              "source": "Kore::Types::Fields::Translations::Fields::Da",
              "type": "string"
            },
            "de": {
              "name": "de",
              "source": "Kore::Types::Fields::Translations::Fields::De",
              "type": "string"
            },
            "el": {
              "name": "el",
              "source": "Kore::Types::Fields::Translations::Fields::El",
              "type": "string"
            },
            "en": {
              "name": "en",
              "source": "Kore::Types::Fields::Translations::Fields::En",
              "type": "string"
            },
            "en_au": {
              "name": "en_au",
              "source": "Kore::Types::Fields::Translations::Fields::EnAu",
              "type": "string"
            },
            "en_ca": {
              "name": "en_ca",
              "source": "Kore::Types::Fields::Translations::Fields::EnCa",
              "type": "string"
            },
            "en_gb": {
              "name": "en_gb",
              "source": "Kore::Types::Fields::Translations::Fields::EnGb",
              "type": "string"
            },
            "en_us": {
              "name": "en_us",
              "source": "Kore::Types::Fields::Translations::Fields::EnUs",
              "type": "string"
            },
            "es": {
              "name": "es",
              "source": "Kore::Types::Fields::Translations::Fields::Es",
              "type": "string"
            },
            "et": {
              "name": "et",
              "source": "Kore::Types::Fields::Translations::Fields::Et",
              "type": "string"
            },
            "fi": {
              "name": "fi",
              "source": "Kore::Types::Fields::Translations::Fields::Fi",
              "type": "string"
            },
            "fr": {
              "name": "fr",
              "source": "Kore::Types::Fields::Translations::Fields::Fr",
              "type": "string"
            },
            "hu": {
              "name": "hu",
              "source": "Kore::Types::Fields::Translations::Fields::Hu",
              "type": "string"
            },
            "is": {
              "name": "is",
              "source": "Kore::Types::Fields::Translations::Fields::Is",
              "type": "string"
            },
            "it": {
              "name": "it",
              "source": "Kore::Types::Fields::Translations::Fields::It",
              "type": "string"
            },
            "nb": {
              "name": "nb",
              "source": "Kore::Types::Fields::Translations::Fields::Nb",
              "type": "string"
            },
            "nl": {
              "name": "nl",
              "source": "Kore::Types::Fields::Translations::Fields::Nl",
              "type": "string"
            },
            "pl": {
              "name": "pl",
              "source": "Kore::Types::Fields::Translations::Fields::Pl",
              "type": "string"
            },
            "pt": {
              "name": "pt",
              "source": "Kore::Types::Fields::Translations::Fields::Pt",
              "type": "string"
            },
            "ro": {
              "name": "ro",
              "source": "Kore::Types::Fields::Translations::Fields::Ro",
              "type": "string"
            },
            "sk": {
              "name": "sk",
              "source": "Kore::Types::Fields::Translations::Fields::Sk",
              "type": "string"
            },
            "sv": {
              "name": "sv",
              "source": "Kore::Types::Fields::Translations::Fields::Sv",
              "type": "string"
            }
          }
        }
      }
    },
    "Message": {
      "status": {
        "name": "status",
        "source": "Newman::Message::Fields::Status",
        "type": "enum",
        "choices": [
          {
            "source": "Newman::Message::Fields::Status::Created",
            "name": "created",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Newman::Message::Fields::Status::Scheduled",
            "name": "scheduled",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Newman::Message::Fields::Status::Delivered",
            "name": "delivered",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Newman::Message::Fields::Status::Cancelled",
            "name": "cancelled",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Newman::Message::Fields::Status::Failed",
            "name": "failed",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          }
        ],
        "values": [
          "created",
          "scheduled",
          "delivered",
          "cancelled",
          "failed"
        ]
      },
      "kind": {
        "name": "kind",
        "source": "Newman::Message::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyHeadsUp",
            "name": "survey_heads_up",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Newman::Messages::SurveyHeadsUpMessage"
            }
          },
          {
            "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLastCall",
            "name": "survey_last_call",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Newman::Messages::SurveyLastCallMessage"
            }
          },
          {
            "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLink",
            "name": "survey_link",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Newman::Messages::SurveyLinkMessage"
            }
          },
          {
            "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyReminder",
            "name": "survey_reminder",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "type": "Newman::Messages::SurveyReminderMessage"
            }
          }
        ],
        "values": [
          "survey_heads_up",
          "survey_last_call",
          "survey_link",
          "survey_reminder"
        ]
      },
      "types": [
        "Newman::Messages::SurveyMessage"
      ]
    },
    "Messages": {
      "SurveyHeadsUpMessage": {
        "status": {
          "name": "status",
          "source": "Newman::Messages::SurveyHeadsUpMessage::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Messages::SurveyHeadsUpMessage::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyHeadsUpMessage::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyHeadsUpMessage::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyHeadsUpMessage::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyHeadsUpMessage::Fields::Status::Failed",
              "name": "failed",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "failed"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Messages::SurveyHeadsUpMessage::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Messages::SurveyHeadsUpMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Messages::SurveyLastCallMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Messages::SurveyLinkMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Messages::SurveyReminderMessage"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        }
      },
      "SurveyLastCallMessage": {
        "status": {
          "name": "status",
          "source": "Newman::Messages::SurveyLastCallMessage::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Messages::SurveyLastCallMessage::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLastCallMessage::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLastCallMessage::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLastCallMessage::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLastCallMessage::Fields::Status::Failed",
              "name": "failed",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "failed"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Messages::SurveyLastCallMessage::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Messages::SurveyHeadsUpMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Messages::SurveyLastCallMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Messages::SurveyLinkMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Messages::SurveyReminderMessage"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        }
      },
      "SurveyLinkMessage": {
        "status": {
          "name": "status",
          "source": "Newman::Messages::SurveyLinkMessage::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Messages::SurveyLinkMessage::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLinkMessage::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLinkMessage::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLinkMessage::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyLinkMessage::Fields::Status::Failed",
              "name": "failed",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "failed"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Messages::SurveyLinkMessage::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Messages::SurveyHeadsUpMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Messages::SurveyLastCallMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Messages::SurveyLinkMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Messages::SurveyReminderMessage"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        }
      },
      "SurveyMessage": {
        "status": {
          "name": "status",
          "source": "Newman::Messages::SurveyMessage::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Messages::SurveyMessage::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyMessage::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyMessage::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyMessage::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyMessage::Fields::Status::Failed",
              "name": "failed",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "failed"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Messages::SurveyMessage::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Messages::SurveyHeadsUpMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Messages::SurveyLastCallMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Messages::SurveyLinkMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Messages::SurveyReminderMessage"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        },
        "types": [
          "Newman::Messages::SurveyHeadsUpMessage",
          "Newman::Messages::SurveyLastCallMessage",
          "Newman::Messages::SurveyLinkMessage",
          "Newman::Messages::SurveyReminderMessage"
        ]
      },
      "SurveyReminderMessage": {
        "status": {
          "name": "status",
          "source": "Newman::Messages::SurveyReminderMessage::Fields::Status",
          "type": "enum",
          "choices": [
            {
              "source": "Newman::Messages::SurveyReminderMessage::Fields::Status::Created",
              "name": "created",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyReminderMessage::Fields::Status::Scheduled",
              "name": "scheduled",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyReminderMessage::Fields::Status::Delivered",
              "name": "delivered",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyReminderMessage::Fields::Status::Cancelled",
              "name": "cancelled",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            },
            {
              "source": "Newman::Messages::SurveyReminderMessage::Fields::Status::Failed",
              "name": "failed",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
              }
            }
          ],
          "values": [
            "created",
            "scheduled",
            "delivered",
            "cancelled",
            "failed"
          ]
        },
        "kind": {
          "name": "kind",
          "source": "Newman::Messages::SurveyReminderMessage::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyHeadsUp",
              "name": "survey_heads_up",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Newman::Messages::SurveyHeadsUpMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLastCall",
              "name": "survey_last_call",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Newman::Messages::SurveyLastCallMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLink",
              "name": "survey_link",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Newman::Messages::SurveyLinkMessage"
              }
            },
            {
              "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyReminder",
              "name": "survey_reminder",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Newman::Messages::SurveyReminderMessage"
              }
            }
          ],
          "values": [
            "survey_heads_up",
            "survey_last_call",
            "survey_link",
            "survey_reminder"
          ]
        }
      }
    }
  },
  "PgSearch": {
    "Document": {
    }
  },
  "Portal": {
    "ApiEvent": {
      "types": [
        "Portal::Clearbit::CompanyDiscoveredEvent",
        "Portal::Clearbit::PersonDiscoveredEvent"
      ]
    },
    "Clearbit": {
      "CompanyDiscoveredEvent": {
      },
      "PersonDiscoveredEvent": {
      }
    },
    "Reaction": {
      "kind": {
        "name": "kind",
        "source": "Portal::Reaction::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Portal::Reaction::Fields::Kind::CreateParticipationFromSalesforceCase",
            "name": "create_participation_from_salesforce_case",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Portal::Reactions::CreateParticipationFromSalesforceCase",
              "integration": "reaction"
            }
          },
          {
            "source": "Portal::Reaction::Fields::Kind::CreateEmailForParticipation",
            "name": "create_email_for_participation",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Portal::Reactions::CreateEmailForParticipation",
              "integration": "reaction"
            }
          },
          {
            "source": "Portal::Reaction::Fields::Kind::CreateParticipantFromSalesforceCase",
            "name": "create_participant_from_salesforce_case",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Portal::Reactions::CreateParticipantFromSalesforceCase",
              "integration": "reaction"
            }
          },
          {
            "source": "Portal::Reaction::Fields::Kind::AddParticipantToGroup",
            "name": "add_participant_to_group",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "type": "Portal::Reactions::AddParticipantToGroup",
              "integration": "reaction"
            }
          }
        ],
        "values": [
          "create_participation_from_salesforce_case",
          "create_email_for_participation",
          "create_participant_from_salesforce_case",
          "add_participant_to_group"
        ]
      },
      "http_method": {
        "name": "http_method",
        "source": "Portal::Reaction::Fields::HttpMethod",
        "type": "enum",
        "choices": [
          {
            "source": "Portal::Reaction::Fields::HttpMethod::Post",
            "name": "post",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Portal::Reaction::Fields::HttpMethod::Put",
            "name": "put",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Portal::Reaction::Fields::HttpMethod::Get",
            "name": "get",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Portal::Reaction::Fields::HttpMethod::Delete",
            "name": "delete",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          }
        ],
        "values": [
          "post",
          "put",
          "get",
          "delete"
        ]
      },
      "types": [
        "Portal::Reactions::AddParticipantToGroup",
        "Portal::Reactions::CreateEmailForParticipation",
        "Portal::Reactions::CreateParticipantFromSalesforceCase",
        "Portal::Reactions::CreateParticipationFromSalesforceCase"
      ]
    },
    "Reactions": {
      "AddParticipantToGroup": {
        "kind": {
          "name": "kind",
          "source": "Portal::Reactions::AddParticipantToGroup::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::Kind::CreateParticipationFromSalesforceCase",
              "name": "create_participation_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipationFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::Kind::CreateEmailForParticipation",
              "name": "create_email_for_participation",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Portal::Reactions::CreateEmailForParticipation",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::Kind::CreateParticipantFromSalesforceCase",
              "name": "create_participant_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipantFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::Kind::AddParticipantToGroup",
              "name": "add_participant_to_group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Portal::Reactions::AddParticipantToGroup",
                "integration": "reaction"
              }
            }
          ],
          "values": [
            "create_participation_from_salesforce_case",
            "create_email_for_participation",
            "create_participant_from_salesforce_case",
            "add_participant_to_group"
          ]
        },
        "http_method": {
          "name": "http_method",
          "source": "Portal::Reactions::AddParticipantToGroup::Fields::HttpMethod",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::HttpMethod::Post",
              "name": "post",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::HttpMethod::Put",
              "name": "put",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::HttpMethod::Get",
              "name": "get",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::HttpMethod::Delete",
              "name": "delete",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            }
          ],
          "values": [
            "post",
            "put",
            "get",
            "delete"
          ]
        },
        "custom_fields": {
          "source": "Portal::Reactions::AddParticipantToGroup::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "group_id": {
              "name": "group_id",
              "source": "Portal::Reactions::AddParticipantToGroup::Fields::CustomFields::Fields::GroupId",
              "type": "string"
            }
          }
        }
      },
      "CreateEmailForParticipation": {
        "kind": {
          "name": "kind",
          "source": "Portal::Reactions::CreateEmailForParticipation::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::Kind::CreateParticipationFromSalesforceCase",
              "name": "create_participation_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipationFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::Kind::CreateEmailForParticipation",
              "name": "create_email_for_participation",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Portal::Reactions::CreateEmailForParticipation",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::Kind::CreateParticipantFromSalesforceCase",
              "name": "create_participant_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipantFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::Kind::AddParticipantToGroup",
              "name": "add_participant_to_group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Portal::Reactions::AddParticipantToGroup",
                "integration": "reaction"
              }
            }
          ],
          "values": [
            "create_participation_from_salesforce_case",
            "create_email_for_participation",
            "create_participant_from_salesforce_case",
            "add_participant_to_group"
          ]
        },
        "http_method": {
          "name": "http_method",
          "source": "Portal::Reactions::CreateEmailForParticipation::Fields::HttpMethod",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::HttpMethod::Post",
              "name": "post",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::HttpMethod::Put",
              "name": "put",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::HttpMethod::Get",
              "name": "get",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::HttpMethod::Delete",
              "name": "delete",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            }
          ],
          "values": [
            "post",
            "put",
            "get",
            "delete"
          ]
        },
        "custom_fields": {
          "source": "Portal::Reactions::CreateEmailForParticipation::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "email_id": {
              "name": "email_id",
              "source": "Portal::Reactions::CreateEmailForParticipation::Fields::CustomFields::Fields::EmailId",
              "type": "string"
            }
          }
        }
      },
      "CreateParticipantFromSalesforceCase": {
        "kind": {
          "name": "kind",
          "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::Kind::CreateParticipationFromSalesforceCase",
              "name": "create_participation_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipationFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::Kind::CreateEmailForParticipation",
              "name": "create_email_for_participation",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Portal::Reactions::CreateEmailForParticipation",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::Kind::CreateParticipantFromSalesforceCase",
              "name": "create_participant_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipantFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::Kind::AddParticipantToGroup",
              "name": "add_participant_to_group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Portal::Reactions::AddParticipantToGroup",
                "integration": "reaction"
              }
            }
          ],
          "values": [
            "create_participation_from_salesforce_case",
            "create_email_for_participation",
            "create_participant_from_salesforce_case",
            "add_participant_to_group"
          ]
        },
        "http_method": {
          "name": "http_method",
          "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::HttpMethod",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::HttpMethod::Post",
              "name": "post",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::HttpMethod::Put",
              "name": "put",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::HttpMethod::Get",
              "name": "get",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::HttpMethod::Delete",
              "name": "delete",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            }
          ],
          "values": [
            "post",
            "put",
            "get",
            "delete"
          ]
        },
        "custom_fields": {
          "source": "Portal::Reactions::CreateParticipantFromSalesforceCase::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
          }
        }
      },
      "CreateParticipationFromSalesforceCase": {
        "kind": {
          "name": "kind",
          "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::Kind::CreateParticipationFromSalesforceCase",
              "name": "create_participation_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipationFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::Kind::CreateEmailForParticipation",
              "name": "create_email_for_participation",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Portal::Reactions::CreateEmailForParticipation",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::Kind::CreateParticipantFromSalesforceCase",
              "name": "create_participant_from_salesforce_case",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Portal::Reactions::CreateParticipantFromSalesforceCase",
                "integration": "reaction"
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::Kind::AddParticipantToGroup",
              "name": "add_participant_to_group",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Portal::Reactions::AddParticipantToGroup",
                "integration": "reaction"
              }
            }
          ],
          "values": [
            "create_participation_from_salesforce_case",
            "create_email_for_participation",
            "create_participant_from_salesforce_case",
            "add_participant_to_group"
          ]
        },
        "http_method": {
          "name": "http_method",
          "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::HttpMethod",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::HttpMethod::Post",
              "name": "post",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::HttpMethod::Put",
              "name": "put",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::HttpMethod::Get",
              "name": "get",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            },
            {
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::HttpMethod::Delete",
              "name": "delete",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
              }
            }
          ],
          "values": [
            "post",
            "put",
            "get",
            "delete"
          ]
        },
        "custom_fields": {
          "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "survey_id": {
              "name": "survey_id",
              "source": "Portal::Reactions::CreateParticipationFromSalesforceCase::Fields::CustomFields::Fields::SurveyId",
              "type": "string"
            }
          }
        }
      }
    },
    "Trigger": {
      "kind": {
        "name": "kind",
        "source": "Portal::Trigger::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Portal::Trigger::Fields::Kind::SalesforceCaseClosedTimer",
            "name": "salesforce_case_closed_timer",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Portal::Triggers::Timers::SalesforceCaseClosedTimer",
              "integration": "salesforce"
            }
          }
        ],
        "values": [
          "salesforce_case_closed_timer"
        ]
      },
      "types": [
        "Portal::Triggers::Timer"
      ]
    },
    "Triggers": {
      "Timer": {
        "kind": {
          "name": "kind",
          "source": "Portal::Triggers::Timer::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Portal::Triggers::Timer::Fields::Kind::SalesforceCaseClosedTimer",
              "name": "salesforce_case_closed_timer",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Portal::Triggers::Timers::SalesforceCaseClosedTimer",
                "integration": "salesforce"
              }
            }
          ],
          "values": [
            "salesforce_case_closed_timer"
          ]
        },
        "custom_fields": {
          "source": "Portal::Triggers::Timer::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "seconds_until_repeat": {
              "name": "seconds_until_repeat",
              "source": "Portal::Triggers::Timer::Fields::CustomFields::Fields::SecondsUntilRepeat",
              "type": "integer"
            }
          }
        },
        "types": [
          "Portal::Triggers::Timers::SalesforceCaseClosedTimer"
        ]
      },
      "Timers": {
        "SalesforceCaseClosedTimer": {
          "kind": {
            "name": "kind",
            "source": "Portal::Triggers::Timers::SalesforceCaseClosedTimer::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Portal::Triggers::Timers::SalesforceCaseClosedTimer::Fields::Kind::SalesforceCaseClosedTimer",
                "name": "salesforce_case_closed_timer",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Portal::Triggers::Timers::SalesforceCaseClosedTimer",
                  "integration": "salesforce"
                }
              }
            ],
            "values": [
              "salesforce_case_closed_timer"
            ]
          },
          "custom_fields": {
            "source": "Portal::Triggers::Timers::SalesforceCaseClosedTimer::Fields::CustomFields",
            "name": "custom_fields",
            "type": "struct",
            "fields": {
              "default_where_params": {
                "name": "default_where_params",
                "source": "Portal::Triggers::Timers::SalesforceCaseClosedTimer::Fields::CustomFields::Fields::DefaultWhereParams",
                "type": "string"
              },
              "additional_where_params": {
                "name": "additional_where_params",
                "source": "Portal::Triggers::Timers::SalesforceCaseClosedTimer::Fields::CustomFields::Fields::AdditionalWhereParams",
                "type": "string"
              },
              "seconds_until_repeat": {
                "name": "seconds_until_repeat",
                "source": "Portal::Triggers::Timers::SalesforceCaseClosedTimer::Fields::CustomFields::Fields::SecondsUntilRepeat",
                "type": "integer"
              }
            }
          }
        }
      }
    }
  },
  "Spectacles": {
    "View": {
    }
  },
  "Translator": {
    "Term": {
      "context": {
        "name": "context",
        "source": "Translator::Term::Fields::Context",
        "type": "enum",
        "choices": [
          {
            "source": "Translator::Term::Fields::Context::Global",
            "name": "global",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Translator::Term::Fields::Context::Organization",
            "name": "organization",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Translator::Term::Fields::Context::Translatable",
            "name": "translatable",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          }
        ],
        "values": [
          "global",
          "organization",
          "translatable"
        ]
      },
      "translations": {
        "source": "Translator::Term::Fields::Translations",
        "name": "translations",
        "type": "struct",
        "fields": {
          "cs": {
            "name": "cs",
            "source": "Kore::Types::Fields::Translations::Fields::Cs",
            "type": "string"
          },
          "da": {
            "name": "da",
            "source": "Kore::Types::Fields::Translations::Fields::Da",
            "type": "string"
          },
          "de": {
            "name": "de",
            "source": "Kore::Types::Fields::Translations::Fields::De",
            "type": "string"
          },
          "el": {
            "name": "el",
            "source": "Kore::Types::Fields::Translations::Fields::El",
            "type": "string"
          },
          "en": {
            "name": "en",
            "source": "Kore::Types::Fields::Translations::Fields::En",
            "type": "string"
          },
          "en_au": {
            "name": "en_au",
            "source": "Kore::Types::Fields::Translations::Fields::EnAu",
            "type": "string"
          },
          "en_ca": {
            "name": "en_ca",
            "source": "Kore::Types::Fields::Translations::Fields::EnCa",
            "type": "string"
          },
          "en_gb": {
            "name": "en_gb",
            "source": "Kore::Types::Fields::Translations::Fields::EnGb",
            "type": "string"
          },
          "en_us": {
            "name": "en_us",
            "source": "Kore::Types::Fields::Translations::Fields::EnUs",
            "type": "string"
          },
          "es": {
            "name": "es",
            "source": "Kore::Types::Fields::Translations::Fields::Es",
            "type": "string"
          },
          "et": {
            "name": "et",
            "source": "Kore::Types::Fields::Translations::Fields::Et",
            "type": "string"
          },
          "fi": {
            "name": "fi",
            "source": "Kore::Types::Fields::Translations::Fields::Fi",
            "type": "string"
          },
          "fr": {
            "name": "fr",
            "source": "Kore::Types::Fields::Translations::Fields::Fr",
            "type": "string"
          },
          "hu": {
            "name": "hu",
            "source": "Kore::Types::Fields::Translations::Fields::Hu",
            "type": "string"
          },
          "is": {
            "name": "is",
            "source": "Kore::Types::Fields::Translations::Fields::Is",
            "type": "string"
          },
          "it": {
            "name": "it",
            "source": "Kore::Types::Fields::Translations::Fields::It",
            "type": "string"
          },
          "nb": {
            "name": "nb",
            "source": "Kore::Types::Fields::Translations::Fields::Nb",
            "type": "string"
          },
          "nl": {
            "name": "nl",
            "source": "Kore::Types::Fields::Translations::Fields::Nl",
            "type": "string"
          },
          "pl": {
            "name": "pl",
            "source": "Kore::Types::Fields::Translations::Fields::Pl",
            "type": "string"
          },
          "pt": {
            "name": "pt",
            "source": "Kore::Types::Fields::Translations::Fields::Pt",
            "type": "string"
          },
          "ro": {
            "name": "ro",
            "source": "Kore::Types::Fields::Translations::Fields::Ro",
            "type": "string"
          },
          "sk": {
            "name": "sk",
            "source": "Kore::Types::Fields::Translations::Fields::Sk",
            "type": "string"
          },
          "sv": {
            "name": "sv",
            "source": "Kore::Types::Fields::Translations::Fields::Sv",
            "type": "string"
          }
        }
      }
    }
  },
  "Types": {
    "source": "Kore::Types",
    "name": "types",
    "type": "struct",
    "fields": {
      "integration": {
        "name": "integration",
        "source": "Kore::Types::Fields::Integration",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Integration::Reaction",
            "name": "reaction",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "account_type": "Client::Accounts::ReactionAccount"
            }
          },
          {
            "source": "Kore::Types::Fields::Integration::Salesforce",
            "name": "salesforce",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "account_type": "Client::Accounts::SalesforceAccount"
            }
          },
          {
            "source": "Kore::Types::Fields::Integration::Mandrill",
            "name": "mandrill",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "account_type": "Client::Accounts::EmailAccount"
            }
          }
        ],
        "values": [
          "reaction",
          "salesforce",
          "mandrill"
        ]
      },
      "event": {
        "name": "event",
        "source": "Kore::Types::Fields::Event",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Event::SalesforceCaseClosed",
            "name": "salesforce_case_closed",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "integration": "salesforce"
            }
          },
          {
            "source": "Kore::Types::Fields::Event::SalesforceCaseCreated",
            "name": "salesforce_case_created",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "integration": "salesforce"
            }
          },
          {
            "source": "Kore::Types::Fields::Event::ReactionParticipationCompleted",
            "name": "reaction_participation_completed",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "integration": "reaction"
            }
          }
        ],
        "values": [
          "salesforce_case_closed",
          "salesforce_case_created",
          "reaction_participation_completed"
        ]
      },
      "locale": {
        "name": "locale",
        "source": "Kore::Types::Fields::Locale",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Locale::Cs",
            "name": "cs",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Da",
            "name": "da",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::De",
            "name": "de",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::El",
            "name": "el",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::En",
            "name": "en",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnAu",
            "name": "en_au",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnCa",
            "name": "en_ca",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnGb",
            "name": "en_gb",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::EnUs",
            "name": "en_us",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Es",
            "name": "es",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Et",
            "name": "et",
            "type": "enum_value",
            "integer_value": 11,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fi",
            "name": "fi",
            "type": "enum_value",
            "integer_value": 12,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Fr",
            "name": "fr",
            "type": "enum_value",
            "integer_value": 13,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Hu",
            "name": "hu",
            "type": "enum_value",
            "integer_value": 14,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Is",
            "name": "is",
            "type": "enum_value",
            "integer_value": 15,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::It",
            "name": "it",
            "type": "enum_value",
            "integer_value": 16,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nb",
            "name": "nb",
            "type": "enum_value",
            "integer_value": 17,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Nl",
            "name": "nl",
            "type": "enum_value",
            "integer_value": 18,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pl",
            "name": "pl",
            "type": "enum_value",
            "integer_value": 19,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Pt",
            "name": "pt",
            "type": "enum_value",
            "integer_value": 20,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Ro",
            "name": "ro",
            "type": "enum_value",
            "integer_value": 21,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sk",
            "name": "sk",
            "type": "enum_value",
            "integer_value": 22,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Locale::Sv",
            "name": "sv",
            "type": "enum_value",
            "integer_value": 23,
            "attributes": {
            }
          }
        ],
        "values": [
          "cs",
          "da",
          "de",
          "el",
          "en",
          "en_au",
          "en_ca",
          "en_gb",
          "en_us",
          "es",
          "et",
          "fi",
          "fr",
          "hu",
          "is",
          "it",
          "nb",
          "nl",
          "pl",
          "pt",
          "ro",
          "sk",
          "sv"
        ]
      },
      "operator": {
        "name": "operator",
        "source": "Kore::Types::Fields::Operator",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Operator::All",
            "name": "all",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Any",
            "name": "any",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Equal",
            "name": "equal",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Present",
            "name": "present",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Subset",
            "name": "subset",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Operator::Superset",
            "name": "superset",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
            }
          }
        ],
        "values": [
          "all",
          "any",
          "equal",
          "present",
          "subset",
          "superset"
        ]
      },
      "comparison_binary_operators": {
        "name": "comparison_binary_operators",
        "source": "Kore::Types::Fields::ComparisonBinaryOperators",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::ComparisonBinaryOperators::Equal",
            "name": "equal",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::ComparisonBinaryOperators::Subset",
            "name": "subset",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::ComparisonBinaryOperators::Superset",
            "name": "superset",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          }
        ],
        "values": [
          "equal",
          "subset",
          "superset"
        ]
      },
      "comparison_unary_operators": {
        "name": "comparison_unary_operators",
        "source": "Kore::Types::Fields::ComparisonUnaryOperators",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::ComparisonUnaryOperators::Present",
            "name": "present",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          }
        ],
        "values": [
          "present"
        ]
      },
      "comparison_operators": {
        "name": "comparison_operators",
        "source": "Kore::Types::Fields::ComparisonOperators",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::ComparisonOperators::Equal",
            "name": "equal",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::ComparisonOperators::Present",
            "name": "present",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::ComparisonOperators::Subset",
            "name": "subset",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::ComparisonOperators::Superset",
            "name": "superset",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          }
        ],
        "values": [
          "equal",
          "present",
          "subset",
          "superset"
        ]
      },
      "task_status": {
        "name": "task_status",
        "source": "Kore::Types::Fields::TaskStatus",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::TaskStatus::Incomplete",
            "name": "incomplete",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::TaskStatus::InProgress",
            "name": "in_progress",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::TaskStatus::UnderReview",
            "name": "under_review",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::TaskStatus::Completed",
            "name": "completed",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          }
        ],
        "values": [
          "incomplete",
          "in_progress",
          "under_review",
          "completed"
        ]
      },
      "job_status": {
        "name": "job_status",
        "source": "Kore::Types::Fields::JobStatus",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::JobStatus::Unattempted",
            "name": "unattempted",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Failure",
            "name": "failure",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Success",
            "name": "success",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::JobStatus::Pending",
            "name": "pending",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
            }
          }
        ],
        "values": [
          "unattempted",
          "failure",
          "success",
          "pending"
        ]
      },
      "vertical": {
        "name": "vertical",
        "source": "Kore::Types::Fields::Vertical",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Vertical::Healthcare",
            "name": "healthcare",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Vertical::Finance",
            "name": "finance",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          }
        ],
        "values": [
          "healthcare",
          "finance"
        ]
      },
      "translations": {
        "source": "Kore::Types::Fields::Translations",
        "name": "translations",
        "type": "struct",
        "fields": {
          "cs": {
            "name": "cs",
            "source": "Kore::Types::Fields::Translations::Fields::Cs",
            "type": "string"
          },
          "da": {
            "name": "da",
            "source": "Kore::Types::Fields::Translations::Fields::Da",
            "type": "string"
          },
          "de": {
            "name": "de",
            "source": "Kore::Types::Fields::Translations::Fields::De",
            "type": "string"
          },
          "el": {
            "name": "el",
            "source": "Kore::Types::Fields::Translations::Fields::El",
            "type": "string"
          },
          "en": {
            "name": "en",
            "source": "Kore::Types::Fields::Translations::Fields::En",
            "type": "string"
          },
          "en_au": {
            "name": "en_au",
            "source": "Kore::Types::Fields::Translations::Fields::EnAu",
            "type": "string"
          },
          "en_ca": {
            "name": "en_ca",
            "source": "Kore::Types::Fields::Translations::Fields::EnCa",
            "type": "string"
          },
          "en_gb": {
            "name": "en_gb",
            "source": "Kore::Types::Fields::Translations::Fields::EnGb",
            "type": "string"
          },
          "en_us": {
            "name": "en_us",
            "source": "Kore::Types::Fields::Translations::Fields::EnUs",
            "type": "string"
          },
          "es": {
            "name": "es",
            "source": "Kore::Types::Fields::Translations::Fields::Es",
            "type": "string"
          },
          "et": {
            "name": "et",
            "source": "Kore::Types::Fields::Translations::Fields::Et",
            "type": "string"
          },
          "fi": {
            "name": "fi",
            "source": "Kore::Types::Fields::Translations::Fields::Fi",
            "type": "string"
          },
          "fr": {
            "name": "fr",
            "source": "Kore::Types::Fields::Translations::Fields::Fr",
            "type": "string"
          },
          "hu": {
            "name": "hu",
            "source": "Kore::Types::Fields::Translations::Fields::Hu",
            "type": "string"
          },
          "is": {
            "name": "is",
            "source": "Kore::Types::Fields::Translations::Fields::Is",
            "type": "string"
          },
          "it": {
            "name": "it",
            "source": "Kore::Types::Fields::Translations::Fields::It",
            "type": "string"
          },
          "nb": {
            "name": "nb",
            "source": "Kore::Types::Fields::Translations::Fields::Nb",
            "type": "string"
          },
          "nl": {
            "name": "nl",
            "source": "Kore::Types::Fields::Translations::Fields::Nl",
            "type": "string"
          },
          "pl": {
            "name": "pl",
            "source": "Kore::Types::Fields::Translations::Fields::Pl",
            "type": "string"
          },
          "pt": {
            "name": "pt",
            "source": "Kore::Types::Fields::Translations::Fields::Pt",
            "type": "string"
          },
          "ro": {
            "name": "ro",
            "source": "Kore::Types::Fields::Translations::Fields::Ro",
            "type": "string"
          },
          "sk": {
            "name": "sk",
            "source": "Kore::Types::Fields::Translations::Fields::Sk",
            "type": "string"
          },
          "sv": {
            "name": "sv",
            "source": "Kore::Types::Fields::Translations::Fields::Sv",
            "type": "string"
          }
        }
      },
      "supported_locales": {
        "source": "Kore::Types::Fields::SupportedLocales",
        "name": "supported_locales",
        "type": "struct",
        "fields": {
          "cs": [
            true,
            false
          ],
          "da": [
            true,
            false
          ],
          "de": [
            true,
            false
          ],
          "el": [
            true,
            false
          ],
          "en": [
            true,
            false
          ],
          "en_au": [
            true,
            false
          ],
          "en_ca": [
            true,
            false
          ],
          "en_gb": [
            true,
            false
          ],
          "en_us": [
            true,
            false
          ],
          "es": [
            true,
            false
          ],
          "et": [
            true,
            false
          ],
          "fi": [
            true,
            false
          ],
          "fr": [
            true,
            false
          ],
          "hu": [
            true,
            false
          ],
          "is": [
            true,
            false
          ],
          "it": [
            true,
            false
          ],
          "nb": [
            true,
            false
          ],
          "nl": [
            true,
            false
          ],
          "pl": [
            true,
            false
          ],
          "pt": [
            true,
            false
          ],
          "ro": [
            true,
            false
          ],
          "sk": [
            true,
            false
          ],
          "sv": [
            true,
            false
          ]
        }
      }
    },
    "Census": {
      "source": "Kore::Types::Census",
      "name": "census",
      "type": "struct",
      "fields": {
        "gender": {
          "name": "gender",
          "source": "Kore::Types::Census::Fields::Gender",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Fields::Gender::Unknown",
              "name": "unknown",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Gender::Male",
              "name": "male",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Gender::Female",
              "name": "female",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
              }
            }
          ],
          "values": [
            "unknown",
            "male",
            "female"
          ]
        },
        "role": {
          "name": "role",
          "source": "Kore::Types::Census::Fields::Role",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Fields::Role::Ceo",
              "name": "ceo",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "label": "ceo"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::CustomerService",
              "name": "customer_service",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "label": "customer_service"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Education",
              "name": "education",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "label": "education"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Engineering",
              "name": "engineering",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "label": "engineering"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Facilities",
              "name": "facilities",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "label": "facilities"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Finance",
              "name": "finance",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "label": "finance"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::HealthProfessional",
              "name": "health_professional",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "label": "health_professional"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::HumanResources",
              "name": "human_resources",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "label": "human_resources"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Legal",
              "name": "legal",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "label": "legal"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Marketing",
              "name": "marketing",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "label": "marketing"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Operations",
              "name": "operations",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "label": "operations"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Other",
              "name": "other",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "label": "other"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Product",
              "name": "product",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
                "label": "product"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::PublicRelations",
              "name": "public_relations",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
                "label": "public_relations"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::RealEstate",
              "name": "real_estate",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
                "label": "real_estate"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Recruiting",
              "name": "recruiting",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
                "label": "recruiting"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Research",
              "name": "research",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
                "label": "research"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Role::Sales",
              "name": "sales",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
                "label": "sales"
              }
            }
          ],
          "values": [
            "ceo",
            "customer_service",
            "education",
            "engineering",
            "facilities",
            "finance",
            "health_professional",
            "human_resources",
            "legal",
            "marketing",
            "operations",
            "other",
            "product",
            "public_relations",
            "real_estate",
            "recruiting",
            "research",
            "sales"
          ]
        },
        "seniority": {
          "name": "seniority",
          "source": "Kore::Types::Census::Fields::Seniority",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Census::Fields::Seniority::Director",
              "name": "director",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "label": "director"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Seniority::Executive",
              "name": "executive",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "label": "executive"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Seniority::Founder",
              "name": "founder",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "label": "founder"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Seniority::Manager",
              "name": "manager",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "label": "manager"
              }
            },
            {
              "source": "Kore::Types::Census::Fields::Seniority::None",
              "name": "none",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "label": "none"
              }
            }
          ],
          "values": [
            "director",
            "executive",
            "founder",
            "manager",
            "none"
          ]
        }
      },
      "FreeformSurvey": {
        "source": "Kore::Types::Census::FreeformSurvey",
        "name": "freeform_survey",
        "type": "struct",
        "fields": {
          "question_kinds": {
            "name": "question_kinds",
            "source": "Kore::Types::Census::FreeformSurvey::Fields::QuestionKinds",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Census::FreeformSurvey::Fields::QuestionKinds::Boolean",
                "name": "boolean",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Census::Questions::BooleanQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::FreeformSurvey::Fields::QuestionKinds::MultipleChoiceMany",
                "name": "multiple_choice_many",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Census::Questions::MultipleChoiceManyQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::FreeformSurvey::Fields::QuestionKinds::MultipleChoice",
                "name": "multiple_choice",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Census::Questions::MultipleChoiceQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::FreeformSurvey::Fields::QuestionKinds::NumberScale",
                "name": "number_scale",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Census::Questions::NumberScaleQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::FreeformSurvey::Fields::QuestionKinds::Ranking",
                "name": "ranking",
                "type": "enum_value",
                "integer_value": 12,
                "attributes": {
                  "type": "Census::Questions::RankingQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::FreeformSurvey::Fields::QuestionKinds::Text",
                "name": "text",
                "type": "enum_value",
                "integer_value": 11,
                "attributes": {
                  "type": "Census::Questions::TextQuestion"
                }
              }
            ],
            "values": [
              "boolean",
              "multiple_choice_many",
              "multiple_choice",
              "number_scale",
              "ranking",
              "text"
            ]
          }
        }
      },
      "NpsSurvey": {
        "source": "Kore::Types::Census::NpsSurvey",
        "name": "nps_survey",
        "type": "struct",
        "fields": {
          "question_kinds": {
            "name": "question_kinds",
            "source": "Kore::Types::Census::NpsSurvey::Fields::QuestionKinds",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Census::NpsSurvey::Fields::QuestionKinds::NpsNumberScale",
                "name": "nps_number_scale",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Census::Questions::NpsNumberScaleQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::NpsSurvey::Fields::QuestionKinds::NpsText",
                "name": "nps_text",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Census::Questions::NpsTextQuestion"
                }
              }
            ],
            "values": [
              "nps_number_scale",
              "nps_text"
            ]
          }
        }
      },
      "PostCaseSurvey": {
        "source": "Kore::Types::Census::PostCaseSurvey",
        "name": "post_case_survey",
        "type": "struct",
        "fields": {
          "question_kinds": {
            "name": "question_kinds",
            "source": "Kore::Types::Census::PostCaseSurvey::Fields::QuestionKinds",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Census::PostCaseSurvey::Fields::QuestionKinds::PostCaseAreYouSatisfied",
                "name": "post_case_are_you_satisfied",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::PostCaseSurvey::Fields::QuestionKinds::PostCaseWhatCouldWeHaveDoneBetter",
                "name": "post_case_what_could_we_have_done_better",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::PostCaseSurvey::Fields::QuestionKinds::PostCaseWhatDidWeDoWell",
                "name": "post_case_what_did_we_do_well",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
                }
              }
            ],
            "values": [
              "post_case_are_you_satisfied",
              "post_case_what_could_we_have_done_better",
              "post_case_what_did_we_do_well"
            ]
          }
        }
      },
      "Question": {
        "source": "Kore::Types::Census::Question",
        "name": "question",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Census::Question::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::Boolean",
                "name": "boolean",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Census::Questions::BooleanQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceImage",
                "name": "multiple_choice_image",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Census::Questions::MultipleChoiceImageQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoiceMany",
                "name": "multiple_choice_many",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Census::Questions::MultipleChoiceManyQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::MultipleChoice",
                "name": "multiple_choice",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Census::Questions::MultipleChoiceQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::NpsNumberScale",
                "name": "nps_number_scale",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Census::Questions::NpsNumberScaleQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::NpsText",
                "name": "nps_text",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Census::Questions::NpsTextQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::NumberScale",
                "name": "number_scale",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Census::Questions::NumberScaleQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseAreYouSatisfied",
                "name": "post_case_are_you_satisfied",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Census::Questions::PostCaseAreYouSatisfiedQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatCouldWeHaveDoneBetter",
                "name": "post_case_what_could_we_have_done_better",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Census::Questions::PostCaseWhatCouldWeHaveDoneBetterQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::PostCaseWhatDidWeDoWell",
                "name": "post_case_what_did_we_do_well",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Census::Questions::PostCaseWhatDidWeDoWellQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::Text",
                "name": "text",
                "type": "enum_value",
                "integer_value": 11,
                "attributes": {
                  "type": "Census::Questions::TextQuestion"
                }
              },
              {
                "source": "Kore::Types::Census::Question::Fields::Kind::Ranking",
                "name": "ranking",
                "type": "enum_value",
                "integer_value": 12,
                "attributes": {
                  "type": "Census::Questions::RankingQuestion"
                }
              }
            ],
            "values": [
              "boolean",
              "multiple_choice_image",
              "multiple_choice_many",
              "multiple_choice",
              "nps_number_scale",
              "nps_text",
              "number_scale",
              "post_case_are_you_satisfied",
              "post_case_what_could_we_have_done_better",
              "post_case_what_did_we_do_well",
              "text",
              "ranking"
            ]
          }
        }
      },
      "Survey": {
        "source": "Kore::Types::Census::Survey",
        "name": "survey",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Census::Survey::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Census::Survey::Fields::Kind::Freeform",
                "name": "freeform",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Census::Surveys::FreeformSurvey",
                  "description": "Freeform",
                  "abbreviation": "FFM"
                }
              },
              {
                "source": "Kore::Types::Census::Survey::Fields::Kind::Nps",
                "name": "nps",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Census::Surveys::NpsSurvey",
                  "description": "Net Promoter Score",
                  "abbreviation": "NPS"
                }
              },
              {
                "source": "Kore::Types::Census::Survey::Fields::Kind::PostCase",
                "name": "post_case",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Census::Surveys::PostCaseSurvey",
                  "description": "Post Case",
                  "abbreviation": "PCS"
                }
              },
              {
                "source": "Kore::Types::Census::Survey::Fields::Kind::WinLossAnalysis",
                "name": "win_loss_analysis",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Census::Surveys::WinLossAnalysisSurvey",
                  "description": "Win Loss Analysis",
                  "abbreviation": "WLA"
                }
              }
            ],
            "values": [
              "freeform",
              "nps",
              "post_case",
              "win_loss_analysis"
            ]
          }
        }
      }
    },
    "Client": {
      "source": "Kore::Types::Client",
      "name": "client",
      "type": "struct",
      "fields": {
      },
      "Account": {
        "source": "Kore::Types::Client::Account",
        "name": "account",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Client::Account::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Client::Account::Fields::Kind::Salesforce",
                "name": "salesforce",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Client::Accounts::SalesforceAccount",
                  "integration": "salesforce"
                }
              },
              {
                "source": "Kore::Types::Client::Account::Fields::Kind::Reaction",
                "name": "reaction",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Client::Accounts::ReactionAccount",
                  "integration": "reaction"
                }
              },
              {
                "source": "Kore::Types::Client::Account::Fields::Kind::Email",
                "name": "email",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Client::Accounts::EmailAccount",
                  "integration": "mandrill"
                }
              }
            ],
            "values": [
              "salesforce",
              "reaction",
              "email"
            ]
          }
        }
      },
      "Permission": {
        "source": "Kore::Types::Client::Permission",
        "name": "permission",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Client::Permission::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Client::Permission::Fields::Kind::Reporting",
                "name": "reporting",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Client::Permissions::ForReporting"
                }
              },
              {
                "source": "Kore::Types::Client::Permission::Fields::Kind::Report",
                "name": "report",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Client::Permissions::ForReport",
                  "resource_type": "Warehouse::Report"
                }
              },
              {
                "source": "Kore::Types::Client::Permission::Fields::Kind::Survey",
                "name": "survey",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Client::Permissions::ForSurvey",
                  "resource_type": "Census::Survey"
                }
              },
              {
                "source": "Kore::Types::Client::Permission::Fields::Kind::Group",
                "name": "group",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Client::Permissions::ForGroup",
                  "resource_type": "Census::Group"
                }
              },
              {
                "source": "Kore::Types::Client::Permission::Fields::Kind::Participant",
                "name": "participant",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Client::Permissions::ForParticipant",
                  "resource_type": "Census::Participant"
                }
              },
              {
                "source": "Kore::Types::Client::Permission::Fields::Kind::Trigger",
                "name": "trigger",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Client::Permissions::ForTrigger",
                  "resource_type": "Portal::Trigger"
                }
              },
              {
                "source": "Kore::Types::Client::Permission::Fields::Kind::User",
                "name": "user",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Client::Permissions::ForUser",
                  "resource_type": "Client::User"
                }
              }
            ],
            "values": [
              "reporting",
              "report",
              "survey",
              "group",
              "participant",
              "trigger",
              "user"
            ]
          }
        }
      }
    },
    "Cms": {
      "source": "Kore::Types::Cms",
      "name": "cms",
      "type": "struct",
      "fields": {
      },
      "Asset": {
        "source": "Kore::Types::Cms::Asset",
        "name": "asset",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Cms::Asset::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Cms::Asset::Fields::Kind::Image",
                "name": "image",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Cms::Assets::Image"
                }
              }
            ],
            "values": [
              "image"
            ]
          }
        }
      }
    },
    "Giza": {
      "source": "Kore::Types::Giza",
      "name": "giza",
      "type": "struct",
      "fields": {
        "sector": {
          "name": "sector",
          "source": "Kore::Types::Giza::Fields::Sector",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Giza::Fields::Sector::ConsumerDiscretionary",
              "name": "consumer_discretionary",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "label": "Consumer Discretionary"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Sector::ConsumerStaples",
              "name": "consumer_staples",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "label": "Consumer Staples"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Sector::Energy",
              "name": "energy",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "label": "Energy"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Sector::Financials",
              "name": "financials",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "label": "Financials"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Sector::HealthCare",
              "name": "health_care",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "label": "Health Care"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Sector::Industrials",
              "name": "industrials",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "label": "Industrials"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Sector::InformationTechnology",
              "name": "information_technology",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "label": "Information Technology"
              }
            }
          ],
          "values": [
            "consumer_discretionary",
            "consumer_staples",
            "energy",
            "financials",
            "health_care",
            "industrials",
            "information_technology"
          ]
        },
        "industry_group": {
          "name": "industry_group",
          "source": "Kore::Types::Giza::Fields::IndustryGroup",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::AutomobilesAndComponents",
              "name": "automobiles_and_components",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "label": "Automobiles & Components"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::Banks",
              "name": "banks",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "label": "Banks"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::CapitalGoods",
              "name": "capital_goods",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "label": "Capital Goods"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::CommercialAndProfessionalServices",
              "name": "commercial_and_professional_services",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "label": "Commercial & Professional Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::ConsumerDurablesAndApparel",
              "name": "consumer_durables_and_apparel",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "label": "Consumer Durables & Apparel"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::ConsumerServices",
              "name": "consumer_services",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "label": "Consumer Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::DiversifiedFinancials",
              "name": "diversified_financials",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "label": "Diversified Financials"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::Energy",
              "name": "energy",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "label": "Energy"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::FoodAndStaplesRetailing",
              "name": "food_and_staples_retailing",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "label": "Food & Staples Retailing"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::FoodBeverageAndTobacco",
              "name": "food_beverage_and_tobacco",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "label": "Food, Beverage & Tobacco"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::HealthCareEquipmentAndServices",
              "name": "health_care_equipment_and_services",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "label": "Health Care Equipment & Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::HouseholdAndPersonalProducts",
              "name": "household_and_personal_products",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "label": "Household & Personal Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::Insurance",
              "name": "insurance",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
                "label": "Insurance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::Media",
              "name": "media",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
                "label": "Media"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::PharmaceuticalsBiotechnologyAndLifeSciences",
              "name": "pharmaceuticals_biotechnology_and_life_sciences",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
                "label": "Pharmaceuticals, Biotechnology & Life Sciences"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::RealEstate",
              "name": "real_estate",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
                "label": "Real Estate"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::Retailing",
              "name": "retailing",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
                "label": "Retailing"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::SoftwareAndServices",
              "name": "software_and_services",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
                "label": "Software & Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::TechnologyHardwareAndEquipment",
              "name": "technology_hardware_and_equipment",
              "type": "enum_value",
              "integer_value": 19,
              "attributes": {
                "label": "Technology Hardware & Equipment"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::IndustryGroup::Transportation",
              "name": "transportation",
              "type": "enum_value",
              "integer_value": 20,
              "attributes": {
                "label": "Transportation"
              }
            }
          ],
          "values": [
            "automobiles_and_components",
            "banks",
            "capital_goods",
            "commercial_and_professional_services",
            "consumer_durables_and_apparel",
            "consumer_services",
            "diversified_financials",
            "energy",
            "food_and_staples_retailing",
            "food_beverage_and_tobacco",
            "health_care_equipment_and_services",
            "household_and_personal_products",
            "insurance",
            "media",
            "pharmaceuticals_biotechnology_and_life_sciences",
            "real_estate",
            "retailing",
            "software_and_services",
            "technology_hardware_and_equipment",
            "transportation"
          ]
        },
        "industry": {
          "name": "industry",
          "source": "Kore::Types::Giza::Fields::Industry",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Giza::Fields::Industry::AerospaceAndDefense",
              "name": "aerospace_and_defense",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "label": "Aerospace & Defense"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::AirFreightAndLogistics",
              "name": "air_freight_and_logistics",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "label": "Air Freight & Logistics"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Airlines",
              "name": "airlines",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "label": "Airlines"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::AutoComponents",
              "name": "auto_components",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "label": "Auto Components"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Automobiles",
              "name": "automobiles",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "label": "Automobiles"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Banks",
              "name": "banks",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "label": "Banks"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Beverages",
              "name": "beverages",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "label": "Beverages"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Biotechnology",
              "name": "biotechnology",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "label": "Biotechnology"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::BuildingProducts",
              "name": "building_products",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "label": "Building Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::CapitalMarkets",
              "name": "capital_markets",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "label": "Capital Markets"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::CommercialServicesAndSupplies",
              "name": "commercial_services_and_supplies",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "label": "Commercial Services & Supplies"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::ConstructionAndEngineering",
              "name": "construction_and_engineering",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "label": "Construction & Engineering"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::ConsumerFinance",
              "name": "consumer_finance",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
                "label": "Consumer Finance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Distributors",
              "name": "distributors",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
                "label": "Distributors"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::DiversifiedConsumerServices",
              "name": "diversified_consumer_services",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
                "label": "Diversified Consumer Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::DiversifiedFinancialServices",
              "name": "diversified_financial_services",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
                "label": "Diversified Financial Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::ElectricalEquipment",
              "name": "electrical_equipment",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
                "label": "Electrical Equipment"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::EnergyEquipmentAndServices",
              "name": "energy_equipment_and_services",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
                "label": "Energy Equipment & Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::FoodAndStaplesRetailing",
              "name": "food_and_staples_retailing",
              "type": "enum_value",
              "integer_value": 19,
              "attributes": {
                "label": "Food & Staples Retailing"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::FoodProducts",
              "name": "food_products",
              "type": "enum_value",
              "integer_value": 20,
              "attributes": {
                "label": "Food Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::HealthCareEquipmentAndSupplies",
              "name": "health_care_equipment_and_supplies",
              "type": "enum_value",
              "integer_value": 21,
              "attributes": {
                "label": "Health Care Equipment & Supplies"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::HealthCareProvidersAndServices",
              "name": "health_care_providers_and_services",
              "type": "enum_value",
              "integer_value": 22,
              "attributes": {
                "label": "Health Care Providers & Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::HotelsRestaurantsAndLeisure",
              "name": "hotels_restaurants_and_leisure",
              "type": "enum_value",
              "integer_value": 23,
              "attributes": {
                "label": "Hotels, Restaurants & Leisure"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::HouseholdDurables",
              "name": "household_durables",
              "type": "enum_value",
              "integer_value": 24,
              "attributes": {
                "label": "Household Durables"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::HouseholdProducts",
              "name": "household_products",
              "type": "enum_value",
              "integer_value": 25,
              "attributes": {
                "label": "Household Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::ItServices",
              "name": "it_services",
              "type": "enum_value",
              "integer_value": 26,
              "attributes": {
                "label": "IT Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Insurance",
              "name": "insurance",
              "type": "enum_value",
              "integer_value": 27,
              "attributes": {
                "label": "Insurance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::InternetAndCatalogRetail",
              "name": "internet_and_catalog_retail",
              "type": "enum_value",
              "integer_value": 28,
              "attributes": {
                "label": "Internet & Catalog Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::LeisureProducts",
              "name": "leisure_products",
              "type": "enum_value",
              "integer_value": 29,
              "attributes": {
                "label": "Leisure Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::LifeSciencesToolsAndServices",
              "name": "life_sciences_tools_and_services",
              "type": "enum_value",
              "integer_value": 30,
              "attributes": {
                "label": "Life Sciences Tools & Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Machinery",
              "name": "machinery",
              "type": "enum_value",
              "integer_value": 31,
              "attributes": {
                "label": "Machinery"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Marine",
              "name": "marine",
              "type": "enum_value",
              "integer_value": 32,
              "attributes": {
                "label": "Marine"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Media",
              "name": "media",
              "type": "enum_value",
              "integer_value": 33,
              "attributes": {
                "label": "Media"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::MultilineRetail",
              "name": "multiline_retail",
              "type": "enum_value",
              "integer_value": 34,
              "attributes": {
                "label": "Multiline Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::OilGasAndConsumableFuels",
              "name": "oil_gas_and_consumable_fuels",
              "type": "enum_value",
              "integer_value": 35,
              "attributes": {
                "label": "Oil, Gas & Consumable Fuels"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Pharmaceuticals",
              "name": "pharmaceuticals",
              "type": "enum_value",
              "integer_value": 36,
              "attributes": {
                "label": "Pharmaceuticals"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::ProfessionalServices",
              "name": "professional_services",
              "type": "enum_value",
              "integer_value": 37,
              "attributes": {
                "label": "Professional Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::RealEstateInvestmentTrusts",
              "name": "real_estate_investment_trusts",
              "type": "enum_value",
              "integer_value": 38,
              "attributes": {
                "label": "Real Estate Investment Trusts"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::RealEstateManagementAndDevelopment",
              "name": "real_estate_management_and_development",
              "type": "enum_value",
              "integer_value": 39,
              "attributes": {
                "label": "Real Estate Management & Development"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::RoadAndRail",
              "name": "road_and_rail",
              "type": "enum_value",
              "integer_value": 40,
              "attributes": {
                "label": "Road & Rail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Software",
              "name": "software",
              "type": "enum_value",
              "integer_value": 41,
              "attributes": {
                "label": "Software"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::SpecialityRetail",
              "name": "speciality_retail",
              "type": "enum_value",
              "integer_value": 42,
              "attributes": {
                "label": "Speciality Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::TechnologyHardwareStorageAndPeripherals",
              "name": "technology_hardware_storage_and_peripherals",
              "type": "enum_value",
              "integer_value": 43,
              "attributes": {
                "label": "Technology Hardware, Storage & Peripherals"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::TextilesApparelAndLuxuryGoods",
              "name": "textiles_apparel_and_luxury_goods",
              "type": "enum_value",
              "integer_value": 44,
              "attributes": {
                "label": "Textiles, Apparel & Luxury Goods"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::ThriftsAndMortgageFinance",
              "name": "thrifts_and_mortgage_finance",
              "type": "enum_value",
              "integer_value": 45,
              "attributes": {
                "label": "Thrifts & Mortgage Finance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::Tobacco",
              "name": "tobacco",
              "type": "enum_value",
              "integer_value": 46,
              "attributes": {
                "label": "Tobacco"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::Industry::TradingCompaniesAndDistributors",
              "name": "trading_companies_and_distributors",
              "type": "enum_value",
              "integer_value": 47,
              "attributes": {
                "label": "Trading Companies & Distributors"
              }
            }
          ],
          "values": [
            "aerospace_and_defense",
            "air_freight_and_logistics",
            "airlines",
            "auto_components",
            "automobiles",
            "banks",
            "beverages",
            "biotechnology",
            "building_products",
            "capital_markets",
            "commercial_services_and_supplies",
            "construction_and_engineering",
            "consumer_finance",
            "distributors",
            "diversified_consumer_services",
            "diversified_financial_services",
            "electrical_equipment",
            "energy_equipment_and_services",
            "food_and_staples_retailing",
            "food_products",
            "health_care_equipment_and_supplies",
            "health_care_providers_and_services",
            "hotels_restaurants_and_leisure",
            "household_durables",
            "household_products",
            "it_services",
            "insurance",
            "internet_and_catalog_retail",
            "leisure_products",
            "life_sciences_tools_and_services",
            "machinery",
            "marine",
            "media",
            "multiline_retail",
            "oil_gas_and_consumable_fuels",
            "pharmaceuticals",
            "professional_services",
            "real_estate_investment_trusts",
            "real_estate_management_and_development",
            "road_and_rail",
            "software",
            "speciality_retail",
            "technology_hardware_storage_and_peripherals",
            "textiles_apparel_and_luxury_goods",
            "thrifts_and_mortgage_finance",
            "tobacco",
            "trading_companies_and_distributors"
          ]
        },
        "sub_industry": {
          "name": "sub_industry",
          "source": "Kore::Types::Giza::Fields::SubIndustry",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Advertisting",
              "name": "advertisting",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "label": "Advertisting"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::AerospaceAndDefense",
              "name": "aerospace_and_defense",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "label": "Aerospace & Defense"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::AgriculturalAndFarmMachinery",
              "name": "agricultural_and_farm_machinery",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "label": "Agricultural & Farm Machinery"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::AgriculturalProducts",
              "name": "agricultural_products",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "label": "Agricultural Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::AirFreightAndLogistics",
              "name": "air_freight_and_logistics",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "label": "Air Freight & Logistics"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Airlines",
              "name": "airlines",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "label": "Airlines"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ApparelRetail",
              "name": "apparel_retail",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "label": "Apparel Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::AssetManagementAndCustodyBanks",
              "name": "asset_management_and_custody_banks",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "label": "Asset Management & Custody Banks"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::AutomotiveRetail",
              "name": "automotive_retail",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "label": "Automotive Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Biotechnology",
              "name": "biotechnology",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "label": "Biotechnology"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Broadcasting",
              "name": "broadcasting",
              "type": "enum_value",
              "integer_value": 11,
              "attributes": {
                "label": "Broadcasting"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::BuildingProducts",
              "name": "building_products",
              "type": "enum_value",
              "integer_value": 12,
              "attributes": {
                "label": "Building Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::CableAndSatelite",
              "name": "cable_and_satelite",
              "type": "enum_value",
              "integer_value": 13,
              "attributes": {
                "label": "Cable & Satelite"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::CasinosAndGaming",
              "name": "casinos_and_gaming",
              "type": "enum_value",
              "integer_value": 14,
              "attributes": {
                "label": "Casinos & Gaming"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::CatalogRetail",
              "name": "catalog_retail",
              "type": "enum_value",
              "integer_value": 15,
              "attributes": {
                "label": "Catalog Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::CoalAndConsumableFuelds",
              "name": "coal_and_consumable_fuelds",
              "type": "enum_value",
              "integer_value": 16,
              "attributes": {
                "label": "Coal & Consumable Fuelds"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::CommercialPrinting",
              "name": "commercial_printing",
              "type": "enum_value",
              "integer_value": 17,
              "attributes": {
                "label": "Commercial Printing"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ComputerAndElectronicsRetail",
              "name": "computer_and_electronics_retail",
              "type": "enum_value",
              "integer_value": 18,
              "attributes": {
                "label": "Computer & Electronics Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ConstructionAndEngineering",
              "name": "construction_and_engineering",
              "type": "enum_value",
              "integer_value": 19,
              "attributes": {
                "label": "Construction & Engineering"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ConstructionMachineryAndHeavyTrucks",
              "name": "construction_machinery_and_heavy_trucks",
              "type": "enum_value",
              "integer_value": 20,
              "attributes": {
                "label": "Construction Machinery & Heavy Trucks"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ConsumerElectronics",
              "name": "consumer_electronics",
              "type": "enum_value",
              "integer_value": 21,
              "attributes": {
                "label": "Consumer Electronics"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ConsumerFinance",
              "name": "consumer_finance",
              "type": "enum_value",
              "integer_value": 22,
              "attributes": {
                "label": "Consumer Finance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::DepartmentStores",
              "name": "department_stores",
              "type": "enum_value",
              "integer_value": 23,
              "attributes": {
                "label": "Department Stores"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Distributors",
              "name": "distributors",
              "type": "enum_value",
              "integer_value": 24,
              "attributes": {
                "label": "Distributors"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::DiversifiedBanks",
              "name": "diversified_banks",
              "type": "enum_value",
              "integer_value": 25,
              "attributes": {
                "label": "Diversified Banks"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::DiversifiedSupportServices",
              "name": "diversified_support_services",
              "type": "enum_value",
              "integer_value": 26,
              "attributes": {
                "label": "Diversified Support Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ElectricalComponentsAndEquipment",
              "name": "electrical_components_and_equipment",
              "type": "enum_value",
              "integer_value": 27,
              "attributes": {
                "label": "Electrical Components & Equipment"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::EnvironmentalAndFacilitiesServices",
              "name": "environmental_and_facilities_services",
              "type": "enum_value",
              "integer_value": 28,
              "attributes": {
                "label": "Environmental & Facilities Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareEquipment",
              "name": "health_care_equipment",
              "type": "enum_value",
              "integer_value": 29,
              "attributes": {
                "label": "Health Care Equipment"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareFacilities",
              "name": "health_care_facilities",
              "type": "enum_value",
              "integer_value": 30,
              "attributes": {
                "label": "Health Care Facilities"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareServices",
              "name": "health_care_services",
              "type": "enum_value",
              "integer_value": 31,
              "attributes": {
                "label": "Health Care Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HealthCareSupplies",
              "name": "health_care_supplies",
              "type": "enum_value",
              "integer_value": 32,
              "attributes": {
                "label": "Health Care Supplies"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HeavyElectricalEquipment",
              "name": "heavy_electrical_equipment",
              "type": "enum_value",
              "integer_value": 33,
              "attributes": {
                "label": "Heavy Electrical Equipment"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HomeFurnishings",
              "name": "home_furnishings",
              "type": "enum_value",
              "integer_value": 34,
              "attributes": {
                "label": "Home Furnishings"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Homebuilding",
              "name": "homebuilding",
              "type": "enum_value",
              "integer_value": 35,
              "attributes": {
                "label": "Homebuilding"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HotelsResortsAndCruiseLines",
              "name": "hotels_resorts_and_cruise_lines",
              "type": "enum_value",
              "integer_value": 36,
              "attributes": {
                "label": "Hotels, Resorts & Cruise Lines"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::HypermarketsAndSuperCenters",
              "name": "hypermarkets_and_super_centers",
              "type": "enum_value",
              "integer_value": 37,
              "attributes": {
                "label": "Hypermarkets & Super Centers"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ItConsultingAndOtherServices",
              "name": "it_consulting_and_other_services",
              "type": "enum_value",
              "integer_value": 38,
              "attributes": {
                "label": "IT Consulting & Other Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::IndustrialMachinery",
              "name": "industrial_machinery",
              "type": "enum_value",
              "integer_value": 39,
              "attributes": {
                "label": "Industrial Machinery"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::InsuranceBrokers",
              "name": "insurance_brokers",
              "type": "enum_value",
              "integer_value": 40,
              "attributes": {
                "label": "Insurance Brokers"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::IntegratedOilAndGas",
              "name": "integrated_oil_and_gas",
              "type": "enum_value",
              "integer_value": 41,
              "attributes": {
                "label": "Integrated Oil & Gas"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::InternetRetail",
              "name": "internet_retail",
              "type": "enum_value",
              "integer_value": 42,
              "attributes": {
                "label": "Internet Retail"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::InvestmentBankingAndBrokerage",
              "name": "investment_banking_and_brokerage",
              "type": "enum_value",
              "integer_value": 43,
              "attributes": {
                "label": "Investment Banking & Brokerage"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::LeisureProducts",
              "name": "leisure_products",
              "type": "enum_value",
              "integer_value": 44,
              "attributes": {
                "label": "Leisure Products"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::LifeAndHealthInsurance",
              "name": "life_and_health_insurance",
              "type": "enum_value",
              "integer_value": 45,
              "attributes": {
                "label": "Life & Health Insurance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::LifeSciencesToolsAndServices",
              "name": "life_sciences_tools_and_services",
              "type": "enum_value",
              "integer_value": 46,
              "attributes": {
                "label": "Life Sciences Tools & Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ManagedHealthCare",
              "name": "managed_health_care",
              "type": "enum_value",
              "integer_value": 47,
              "attributes": {
                "label": "Managed Health Care"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Marine",
              "name": "marine",
              "type": "enum_value",
              "integer_value": 48,
              "attributes": {
                "label": "Marine"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::MoviesAndEntertainment",
              "name": "movies_and_entertainment",
              "type": "enum_value",
              "integer_value": 49,
              "attributes": {
                "label": "Movies & Entertainment"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::OfficeServicesAndSupplies",
              "name": "office_services_and_supplies",
              "type": "enum_value",
              "integer_value": 50,
              "attributes": {
                "label": "Office Services & Supplies"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::OilAndGasEquipmentAndServices",
              "name": "oil_and_gas_equipment_and_services",
              "type": "enum_value",
              "integer_value": 51,
              "attributes": {
                "label": "Oil & Gas Equipment & Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::OilAndGasExplorationAndProduction",
              "name": "oil_and_gas_exploration_and_production",
              "type": "enum_value",
              "integer_value": 52,
              "attributes": {
                "label": "Oil & Gas Exploration & Production"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::OilAndGasRefiningAndMarketing",
              "name": "oil_and_gas_refining_and_marketing",
              "type": "enum_value",
              "integer_value": 53,
              "attributes": {
                "label": "Oil & Gas Refining & Marketing"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::PackagedFoodAndMeats",
              "name": "packaged_food_and_meats",
              "type": "enum_value",
              "integer_value": 54,
              "attributes": {
                "label": "Packaged Food & Meats"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Pharmaceuticals",
              "name": "pharmaceuticals",
              "type": "enum_value",
              "integer_value": 55,
              "attributes": {
                "label": "Pharmaceuticals"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Publishing",
              "name": "publishing",
              "type": "enum_value",
              "integer_value": 56,
              "attributes": {
                "label": "Publishing"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Railroads",
              "name": "railroads",
              "type": "enum_value",
              "integer_value": 57,
              "attributes": {
                "label": "Railroads"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::RealEstateServices",
              "name": "real_estate_services",
              "type": "enum_value",
              "integer_value": 58,
              "attributes": {
                "label": "Real Estate Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Reinsurance",
              "name": "reinsurance",
              "type": "enum_value",
              "integer_value": 59,
              "attributes": {
                "label": "Reinsurance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Restaurants",
              "name": "restaurants",
              "type": "enum_value",
              "integer_value": 60,
              "attributes": {
                "label": "Restaurants"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::SecurityAndAlarmServices",
              "name": "security_and_alarm_services",
              "type": "enum_value",
              "integer_value": 61,
              "attributes": {
                "label": "Security & Alarm Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::SpecialityStores",
              "name": "speciality_stores",
              "type": "enum_value",
              "integer_value": 62,
              "attributes": {
                "label": "Speciality Stores"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::SpecializedConsumerServices",
              "name": "specialized_consumer_services",
              "type": "enum_value",
              "integer_value": 63,
              "attributes": {
                "label": "Specialized Consumer Services"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::SpecializedFinance",
              "name": "specialized_finance",
              "type": "enum_value",
              "integer_value": 64,
              "attributes": {
                "label": "Specialized Finance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::TechnologyHardwareStorageAndPeripherals",
              "name": "technology_hardware_storage_and_peripherals",
              "type": "enum_value",
              "integer_value": 65,
              "attributes": {
                "label": "Technology Hardware, Storage & Peripherals"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::ThriftsAndMortgageFinance",
              "name": "thrifts_and_mortgage_finance",
              "type": "enum_value",
              "integer_value": 66,
              "attributes": {
                "label": "Thrifts & Mortgage Finance"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Tobacco",
              "name": "tobacco",
              "type": "enum_value",
              "integer_value": 67,
              "attributes": {
                "label": "Tobacco"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::TradingCompaniesAndDistributors",
              "name": "trading_companies_and_distributors",
              "type": "enum_value",
              "integer_value": 68,
              "attributes": {
                "label": "Trading Companies & Distributors"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::Trucking",
              "name": "trucking",
              "type": "enum_value",
              "integer_value": 69,
              "attributes": {
                "label": "Trucking"
              }
            },
            {
              "source": "Kore::Types::Giza::Fields::SubIndustry::GroundTransportation",
              "name": "ground_transportation",
              "type": "enum_value",
              "integer_value": 70,
              "attributes": {
                "label": "Ground Transportation"
              }
            }
          ],
          "values": [
            "advertisting",
            "aerospace_and_defense",
            "agricultural_and_farm_machinery",
            "agricultural_products",
            "air_freight_and_logistics",
            "airlines",
            "apparel_retail",
            "asset_management_and_custody_banks",
            "automotive_retail",
            "biotechnology",
            "broadcasting",
            "building_products",
            "cable_and_satelite",
            "casinos_and_gaming",
            "catalog_retail",
            "coal_and_consumable_fuelds",
            "commercial_printing",
            "computer_and_electronics_retail",
            "construction_and_engineering",
            "construction_machinery_and_heavy_trucks",
            "consumer_electronics",
            "consumer_finance",
            "department_stores",
            "distributors",
            "diversified_banks",
            "diversified_support_services",
            "electrical_components_and_equipment",
            "environmental_and_facilities_services",
            "health_care_equipment",
            "health_care_facilities",
            "health_care_services",
            "health_care_supplies",
            "heavy_electrical_equipment",
            "home_furnishings",
            "homebuilding",
            "hotels_resorts_and_cruise_lines",
            "hypermarkets_and_super_centers",
            "it_consulting_and_other_services",
            "industrial_machinery",
            "insurance_brokers",
            "integrated_oil_and_gas",
            "internet_retail",
            "investment_banking_and_brokerage",
            "leisure_products",
            "life_and_health_insurance",
            "life_sciences_tools_and_services",
            "managed_health_care",
            "marine",
            "movies_and_entertainment",
            "office_services_and_supplies",
            "oil_and_gas_equipment_and_services",
            "oil_and_gas_exploration_and_production",
            "oil_and_gas_refining_and_marketing",
            "packaged_food_and_meats",
            "pharmaceuticals",
            "publishing",
            "railroads",
            "real_estate_services",
            "reinsurance",
            "restaurants",
            "security_and_alarm_services",
            "speciality_stores",
            "specialized_consumer_services",
            "specialized_finance",
            "technology_hardware_storage_and_peripherals",
            "thrifts_and_mortgage_finance",
            "tobacco",
            "trading_companies_and_distributors",
            "trucking",
            "ground_transportation"
          ]
        }
      },
      "Place": {
        "source": "Kore::Types::Giza::Place",
        "name": "place",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Giza::Place::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Giza::Place::Fields::Kind::Bank",
                "name": "bank",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Giza::Places::Bank"
                }
              },
              {
                "source": "Kore::Types::Giza::Place::Fields::Kind::Hospital",
                "name": "hospital",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Giza::Places::Hospital"
                }
              }
            ],
            "values": [
              "bank",
              "hospital"
            ]
          }
        }
      }
    },
    "Newman": {
      "source": "Kore::Types::Newman",
      "name": "newman",
      "type": "struct",
      "fields": {
      },
      "Email": {
        "source": "Kore::Types::Newman::Email",
        "name": "email",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Newman::Email::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyHeadsUp",
                "name": "survey_heads_up",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Newman::Emails::SurveyHeadsUpEmail"
                }
              },
              {
                "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLastCall",
                "name": "survey_last_call",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Newman::Emails::SurveyLastCallEmail"
                }
              },
              {
                "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyLink",
                "name": "survey_link",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Newman::Emails::SurveyLinkEmail"
                }
              },
              {
                "source": "Kore::Types::Newman::Email::Fields::Kind::SurveyReminder",
                "name": "survey_reminder",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Newman::Emails::SurveyReminderEmail"
                }
              }
            ],
            "values": [
              "survey_heads_up",
              "survey_last_call",
              "survey_link",
              "survey_reminder"
            ]
          }
        }
      },
      "Emails": {
        "SurveyEmail": {
          "source": "Kore::Types::Newman::Emails::SurveyEmail",
          "name": "survey_email",
          "type": "struct",
          "fields": {
            "kind": {
              "name": "kind",
              "source": "Kore::Types::Newman::Emails::SurveyEmail::Fields::Kind",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Newman::Emails::SurveyEmail::Fields::Kind::HeadsUp",
                  "name": "heads_up",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "type": "Newman::Emails::SurveyHeadsUpEmail"
                  }
                },
                {
                  "source": "Kore::Types::Newman::Emails::SurveyEmail::Fields::Kind::LastCall",
                  "name": "last_call",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "type": "Newman::Emails::SurveyLastCallEmail"
                  }
                },
                {
                  "source": "Kore::Types::Newman::Emails::SurveyEmail::Fields::Kind::Link",
                  "name": "link",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "type": "Newman::Emails::SurveyLinkEmail"
                  }
                },
                {
                  "source": "Kore::Types::Newman::Emails::SurveyEmail::Fields::Kind::Reminder",
                  "name": "reminder",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "type": "Newman::Emails::SurveyReminderEmail"
                  }
                }
              ],
              "values": [
                "heads_up",
                "last_call",
                "link",
                "reminder"
              ]
            }
          }
        }
      },
      "Message": {
        "source": "Kore::Types::Newman::Message",
        "name": "message",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Newman::Message::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyHeadsUp",
                "name": "survey_heads_up",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Newman::Messages::SurveyHeadsUpMessage"
                }
              },
              {
                "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLastCall",
                "name": "survey_last_call",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Newman::Messages::SurveyLastCallMessage"
                }
              },
              {
                "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyLink",
                "name": "survey_link",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Newman::Messages::SurveyLinkMessage"
                }
              },
              {
                "source": "Kore::Types::Newman::Message::Fields::Kind::SurveyReminder",
                "name": "survey_reminder",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Newman::Messages::SurveyReminderMessage"
                }
              }
            ],
            "values": [
              "survey_heads_up",
              "survey_last_call",
              "survey_link",
              "survey_reminder"
            ]
          }
        }
      },
      "Messages": {
        "SurveyMessage": {
          "source": "Kore::Types::Newman::Messages::SurveyMessage",
          "name": "survey_message",
          "type": "struct",
          "fields": {
            "kind": {
              "name": "kind",
              "source": "Kore::Types::Newman::Messages::SurveyMessage::Fields::Kind",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Newman::Messages::SurveyMessage::Fields::Kind::HeadsUp",
                  "name": "heads_up",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "type": "Newman::Messages::SurveyHeadsUpMessage"
                  }
                },
                {
                  "source": "Kore::Types::Newman::Messages::SurveyMessage::Fields::Kind::LastCall",
                  "name": "last_call",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "type": "Newman::Messages::SurveyLastCallMessage"
                  }
                },
                {
                  "source": "Kore::Types::Newman::Messages::SurveyMessage::Fields::Kind::Link",
                  "name": "link",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "type": "Newman::Messages::SurveyLinkMessage"
                  }
                },
                {
                  "source": "Kore::Types::Newman::Messages::SurveyMessage::Fields::Kind::Reminder",
                  "name": "reminder",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "type": "Newman::Messages::SurveyReminderMessage"
                  }
                }
              ],
              "values": [
                "heads_up",
                "last_call",
                "link",
                "reminder"
              ]
            }
          }
        }
      }
    },
    "Portal": {
      "source": "Kore::Types::Portal",
      "name": "portal",
      "type": "struct",
      "fields": {
      },
      "Event": {
        "source": "Kore::Types::Portal::Event",
        "name": "event",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Portal::Event::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Portal::Event::Fields::Kind::ReactionParticipationCreated",
                "name": "reaction_participation_created",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "::Portal::Events::ReactionParticipationCreated",
                  "routing_key": "reaction.participation.created",
                  "action": "create_reaction_participation"
                }
              },
              {
                "source": "Kore::Types::Portal::Event::Fields::Kind::ReactionParticipationCompleted",
                "name": "reaction_participation_completed",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "::Portal::Events::ReactionParticipationCompleted",
                  "routing_key": "reaction.participation.completed",
                  "action": "complete_reaction_participation"
                }
              },
              {
                "source": "Kore::Types::Portal::Event::Fields::Kind::ReactionMessageScheduled",
                "name": "reaction_message_scheduled",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "::Portal::Events::ReactionMessageScheduled",
                  "routing_key": "reaction.message.scheduled",
                  "action": "schedule_reaction_message"
                }
              },
              {
                "source": "Kore::Types::Portal::Event::Fields::Kind::ReactionMessageDelivered",
                "name": "reaction_message_delivered",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "::Portal::Events::ReactionMessageDelivered",
                  "routing_key": "reaction.message.delivered",
                  "action": "deliver_reaction_message"
                }
              },
              {
                "source": "Kore::Types::Portal::Event::Fields::Kind::ReactionMessageDeleted",
                "name": "reaction_message_deleted",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "::Portal::Events::ReactionMessageDeleted",
                  "routing_key": "reaction.message.deleted",
                  "action": "delete_reaction_message"
                }
              }
            ],
            "values": [
              "reaction_participation_created",
              "reaction_participation_completed",
              "reaction_message_scheduled",
              "reaction_message_delivered",
              "reaction_message_deleted"
            ]
          }
        }
      }
    },
    "Salesforce": {
      "source": "Kore::Types::Salesforce",
      "name": "salesforce",
      "type": "struct",
      "fields": {
        "field": {
          "source": "Kore::Types::Salesforce::Fields::Field",
          "name": "field",
          "type": "struct",
          "fields": {
            "name": {
              "name": "name",
              "source": "Kore::Types::Salesforce::Fields::Field::Fields::Name",
              "type": "string"
            },
            "from": {
              "name": "from",
              "source": "Kore::Types::Salesforce::Fields::Field::Fields::From",
              "type": "string"
            },
            "model": {
              "name": "model",
              "source": "Kore::Types::Salesforce::Fields::Field::Fields::Model",
              "type": "string"
            },
            "is_custom": [
              true,
              false
            ],
            "as": {
              "name": "as",
              "source": "Kore::Types::Salesforce::Fields::Field::Fields::As",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::Boolean",
                  "name": "boolean",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                  }
                },
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::Int",
                  "name": "int",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                  }
                },
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::Double",
                  "name": "double",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                  }
                },
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::Percent",
                  "name": "percent",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                  }
                },
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::Date",
                  "name": "date",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                  }
                },
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::Datetime",
                  "name": "datetime",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                  }
                },
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::String",
                  "name": "string",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                  }
                },
                {
                  "source": "Kore::Types::Salesforce::Fields::Field::Fields::As::Base64",
                  "name": "base64",
                  "type": "enum_value",
                  "integer_value": 8,
                  "attributes": {
                  }
                }
              ],
              "values": [
                "boolean",
                "int",
                "double",
                "percent",
                "date",
                "datetime",
                "string",
                "base64"
              ]
            }
          }
        },
        "model": {
          "source": "Kore::Types::Salesforce::Fields::Model",
          "name": "model",
          "type": "struct",
          "fields": {
            "name": {
              "name": "name",
              "source": "Kore::Types::Salesforce::Fields::Model::Fields::Name",
              "type": "string"
            },
            "fields": {
              "name": "fields",
              "source": "Kore::Types::Salesforce::Fields::Model::Fields::Fields",
              "type": "array_of"
            }
          }
        }
      }
    },
    "Ui": {
      "source": "Kore::Types::Ui",
      "name": "ui",
      "type": "struct",
      "fields": {
        "color": {
          "name": "color",
          "source": "Kore::Types::Ui::Fields::Color",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Ui::Fields::Color::Red",
              "name": "red",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "hex": "#db2828",
                "contrast": "white"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Orange",
              "name": "orange",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "hex": "#f2711c",
                "contrast": "white"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Yellow",
              "name": "yellow",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "hex": "#fbbd08",
                "contrast": "black"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Olive",
              "name": "olive",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "hex": "#b5cc18",
                "contrast": "black"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Green",
              "name": "green",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "hex": "#21ba45",
                "contrast": "white"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Teal",
              "name": "teal",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "hex": "#00b5ad",
                "contrast": "white"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Blue",
              "name": "blue",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "hex": "#2185d0",
                "contrast": "white"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Violet",
              "name": "violet",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "hex": "#6435c9",
                "contrast": "white"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Purple",
              "name": "purple",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "hex": "#a333c8",
                "contrast": "white"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::Color::Grey",
              "name": "grey",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "hex": "#767676",
                "contrast": "white"
              }
            }
          ],
          "values": [
            "red",
            "orange",
            "yellow",
            "olive",
            "green",
            "teal",
            "blue",
            "violet",
            "purple",
            "grey"
          ]
        },
        "email_start_button_style": {
          "name": "email_start_button_style",
          "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::First",
              "name": "first",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "display": "inline-block",
                "margin": "0.5em 0",
                "padding": "12px 24px",
                "font-weight": "400",
                "line-height": "14px",
                "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
                "text-align": "center",
                "text-decoration": "none",
                "color": "#000000",
                "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                "font-size": "18px"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::Second",
              "name": "second",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "display": "inline-block",
                "margin": "0.5em 0",
                "padding": "8px 40px",
                "font-weight": "300",
                "line-height": 1,
                "box-shadow": "0 0 0 1px transparent inset, 0 0 0 0 rgba(39, 41, 43, 0.15) inset",
                "text-align": "center",
                "text-decoration": "none",
                "color": "#000000",
                "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                "font-size": "16px",
                "letter-spacing": "1px",
                "border-radius": "14px"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::Third",
              "name": "third",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "display": "inline-block",
                "margin": "0.5em 0",
                "padding": "14px 32px",
                "font-weight": "500",
                "line-height": 1,
                "box-shadow": "0 8px 17px rgba(0, 0, 0, 0.2);",
                "text-align": "center",
                "text-decoration": "none",
                "color": "#000000",
                "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                "font-size": "16px",
                "letter-spacing": "1.5px",
                "border-radius": "3px"
              }
            },
            {
              "source": "Kore::Types::Ui::Fields::EmailStartButtonStyle::Peer60",
              "name": "peer60",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "display": "inline-block",
                "margin": "0.5em 0",
                "padding": "10px 24px",
                "font-weight": "400",
                "line-height": 1,
                "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
                "text-align": "center",
                "text-decoration": "none",
                "color": "#000000",
                "font-family": "Helvetica Neue, helvetica, arial, sans-serif",
                "font-size": "18px",
                "border-radius": "25px"
              }
            }
          ],
          "values": [
            "first",
            "second",
            "third",
            "peer60"
          ]
        }
      }
    },
    "Warehouse": {
      "source": "Kore::Types::Warehouse",
      "name": "warehouse",
      "type": "struct",
      "fields": {
      },
      "Page": {
        "source": "Kore::Types::Warehouse::Page",
        "name": "page",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Warehouse::Page::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          }
        }
      },
      "Report": {
        "source": "Kore::Types::Warehouse::Report",
        "name": "report",
        "type": "struct",
        "fields": {
          "kind": {
            "name": "kind",
            "source": "Kore::Types::Warehouse::Report::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Report::Fields::Kind::SurveyReport",
                "name": "survey_report",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Reports::SurveyReport"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Report::Fields::Kind::CustomReport",
                "name": "custom_report",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Reports::CustomReport"
                }
              }
            ],
            "values": [
              "survey_report",
              "custom_report"
            ]
          },
          "looker_model": {
            "name": "looker_model",
            "source": "Kore::Types::Warehouse::Report::Fields::LookerModel",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Organization",
                "name": "organization",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                }
              },
              {
                "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Research",
                "name": "research",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                }
              }
            ],
            "values": [
              "organization",
              "research"
            ]
          }
        }
      }
    }
  },
  "Warehouse": {
    "Dimensions": {
      "Date": {
      },
      "Time": {
      }
    },
    "Look": {
      "types": [
        "Warehouse::Looks::OrganizationDashboard",
        "Warehouse::Looks::RecordDashboard",
        "Warehouse::Looks::RecordExplore",
        "Warehouse::Looks::SavedExplore"
      ]
    },
    "Looks": {
      "OrganizationDashboard": {
        "types": [
          "Warehouse::Looks::OrganizationDashboards::CsatDashboard",
          "Warehouse::Looks::OrganizationDashboards::CustomOrganizationDashboard",
          "Warehouse::Looks::OrganizationDashboards::NpsDashboard",
          "Warehouse::Looks::OrganizationDashboards::ResponseRateDashboard"
        ]
      },
      "OrganizationDashboards": {
        "CsatDashboard": {
        },
        "CustomOrganizationDashboard": {
        },
        "NpsDashboard": {
        },
        "ResponseRateDashboard": {
        }
      },
      "RecordDashboard": {
        "types": [
          "Warehouse::Looks::RecordDashboards::QuestionDashboard",
          "Warehouse::Looks::RecordDashboards::SurveyDashboard"
        ]
      },
      "RecordDashboards": {
        "QuestionDashboard": {
          "types": [
            "Warehouse::Looks::RecordDashboards::Questions::BooleanQuestionDashboard",
            "Warehouse::Looks::RecordDashboards::Questions::MultipleChoiceManyQuestionDashboard",
            "Warehouse::Looks::RecordDashboards::Questions::MultipleChoiceQuestionDashboard",
            "Warehouse::Looks::RecordDashboards::Questions::NpsNumberScaleQuestionDashboard",
            "Warehouse::Looks::RecordDashboards::Questions::NpsTextQuestionDashboard",
            "Warehouse::Looks::RecordDashboards::Questions::NumberScaleQuestionDashboard",
            "Warehouse::Looks::RecordDashboards::Questions::RankingQuestionDashboard",
            "Warehouse::Looks::RecordDashboards::Questions::TextQuestionDashboard"
          ]
        },
        "Questions": {
          "BooleanQuestionDashboard": {
          },
          "MultipleChoiceManyQuestionDashboard": {
          },
          "MultipleChoiceQuestionDashboard": {
          },
          "NpsNumberScaleQuestionDashboard": {
          },
          "NpsTextQuestionDashboard": {
          },
          "NumberScaleQuestionDashboard": {
          },
          "RankingQuestionDashboard": {
          },
          "TextQuestionDashboard": {
          }
        },
        "SurveyDashboard": {
          "types": [
            "Warehouse::Looks::RecordDashboards::Surveys::ResponseRateDashboard"
          ]
        },
        "Surveys": {
          "ResponseRateDashboard": {
          }
        }
      },
      "RecordExplore": {
        "types": [
          "Warehouse::Looks::RecordExplores::Question",
          "Warehouse::Looks::RecordExplores::Survey"
        ]
      },
      "RecordExplores": {
        "Question": {
          "types": [
            "Warehouse::Looks::RecordExplores::Questions::BooleanQuestionExplore",
            "Warehouse::Looks::RecordExplores::Questions::MultipleChoiceManyQuestionExplore",
            "Warehouse::Looks::RecordExplores::Questions::MultipleChoiceQuestionExplore",
            "Warehouse::Looks::RecordExplores::Questions::NpsNumberScaleQuestionExplore",
            "Warehouse::Looks::RecordExplores::Questions::NpsTextQuestionExplore",
            "Warehouse::Looks::RecordExplores::Questions::NumberScaleQuestionExplore",
            "Warehouse::Looks::RecordExplores::Questions::TextQuestionExplore",
            "Warehouse::Looks::RecordExplores::Questions::RankingQuestionExplore"
          ]
        },
        "Questions": {
          "BooleanQuestionExplore": {
          },
          "MultipleChoiceManyQuestionExplore": {
          },
          "MultipleChoiceQuestionExplore": {
          },
          "NpsNumberScaleQuestionExplore": {
          },
          "NpsTextQuestionExplore": {
          },
          "NumberScaleQuestionExplore": {
          },
          "RankingQuestionExplore": {
          },
          "TextQuestionExplore": {
          }
        },
        "Survey": {
        }
      },
      "SavedExplore": {
      }
    },
    "Page": {
      "kind": {
        "name": "kind",
        "source": "Warehouse::Page::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
            "name": "boolean_question_page",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
              "reportable_type": "Census::Questions::BooleanQuestion",
              "reportable_kind": "boolean",
              "super_kind": "question_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
            "name": "multiple_choice_many_question_page",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
              "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
              "reportable_kind": "multiple_choice_many",
              "super_kind": "question_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
            "name": "multiple_choice_question_page",
            "type": "enum_value",
            "integer_value": 3,
            "attributes": {
              "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
              "reportable_type": "Census::Questions::MultipleChoiceQuestion",
              "reportable_kind": "multiple_choice",
              "super_kind": "question_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
            "name": "nps_number_scale_question_page",
            "type": "enum_value",
            "integer_value": 4,
            "attributes": {
              "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
              "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
              "reportable_kind": "nps_number_scale",
              "super_kind": "question_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
            "name": "nps_text_question_page",
            "type": "enum_value",
            "integer_value": 5,
            "attributes": {
              "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
              "reportable_type": "Census::Questions::NpsTextQuestion",
              "reportable_kind": "nps_text",
              "super_kind": "question_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
            "name": "number_scale_question_page",
            "type": "enum_value",
            "integer_value": 6,
            "attributes": {
              "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
              "reportable_type": "Census::Questions::NumberScaleQuestion",
              "reportable_kind": "number_scale",
              "super_kind": "question_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
            "name": "text_question_page",
            "type": "enum_value",
            "integer_value": 7,
            "attributes": {
              "type": "Warehouse::Pages::Questions::TextQuestionPage",
              "reportable_type": "Census::Questions::TextQuestion",
              "reportable_kind": "text",
              "super_kind": "question_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
            "name": "freeform_survey_page",
            "type": "enum_value",
            "integer_value": 8,
            "attributes": {
              "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
              "reportable_type": "Census::Surveys::FreeformSurvey",
              "reportable_kind": "freeform",
              "super_kind": "survey_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
            "name": "nps_survey_page",
            "type": "enum_value",
            "integer_value": 9,
            "attributes": {
              "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
              "reportable_type": "Census::Surveys::NpsSurvey",
              "reportable_kind": "nps",
              "super_kind": "survey_page"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
            "name": "ranking_question_page",
            "type": "enum_value",
            "integer_value": 10,
            "attributes": {
              "type": "Warehouse::Pages::Questions::RankingQuestionPage",
              "reportable_type": "Census::Questions::RankingQuestion",
              "reportable_kind": "ranking",
              "super_kind": "question_page"
            }
          }
        ],
        "values": [
          "boolean_question_page",
          "multiple_choice_many_question_page",
          "multiple_choice_question_page",
          "nps_number_scale_question_page",
          "nps_text_question_page",
          "number_scale_question_page",
          "text_question_page",
          "freeform_survey_page",
          "nps_survey_page",
          "ranking_question_page"
        ]
      },
      "types": [
        "Warehouse::Pages::QuestionPage",
        "Warehouse::Pages::SurveyPage"
      ]
    },
    "Pages": {
      "QuestionPage": {
        "kind": {
          "name": "kind",
          "source": "Warehouse::Pages::QuestionPage::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
              "name": "boolean_question_page",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                "reportable_type": "Census::Questions::BooleanQuestion",
                "reportable_kind": "boolean",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
              "name": "multiple_choice_many_question_page",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                "reportable_kind": "multiple_choice_many",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
              "name": "multiple_choice_question_page",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                "reportable_kind": "multiple_choice",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
              "name": "nps_number_scale_question_page",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                "reportable_kind": "nps_number_scale",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
              "name": "nps_text_question_page",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                "reportable_type": "Census::Questions::NpsTextQuestion",
                "reportable_kind": "nps_text",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
              "name": "number_scale_question_page",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                "reportable_type": "Census::Questions::NumberScaleQuestion",
                "reportable_kind": "number_scale",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
              "name": "text_question_page",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Warehouse::Pages::Questions::TextQuestionPage",
                "reportable_type": "Census::Questions::TextQuestion",
                "reportable_kind": "text",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
              "name": "freeform_survey_page",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                "reportable_type": "Census::Surveys::FreeformSurvey",
                "reportable_kind": "freeform",
                "super_kind": "survey_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
              "name": "nps_survey_page",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                "reportable_type": "Census::Surveys::NpsSurvey",
                "reportable_kind": "nps",
                "super_kind": "survey_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
              "name": "ranking_question_page",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                "reportable_type": "Census::Questions::RankingQuestion",
                "reportable_kind": "ranking",
                "super_kind": "question_page"
              }
            }
          ],
          "values": [
            "boolean_question_page",
            "multiple_choice_many_question_page",
            "multiple_choice_question_page",
            "nps_number_scale_question_page",
            "nps_text_question_page",
            "number_scale_question_page",
            "text_question_page",
            "freeform_survey_page",
            "nps_survey_page",
            "ranking_question_page"
          ]
        },
        "types": [
          "Warehouse::Pages::Questions::BooleanQuestionPage",
          "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
          "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
          "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
          "Warehouse::Pages::Questions::NpsTextQuestionPage",
          "Warehouse::Pages::Questions::NumberScaleQuestionPage",
          "Warehouse::Pages::Questions::RankingQuestionPage",
          "Warehouse::Pages::Questions::TextQuestionPage"
        ]
      },
      "Questions": {
        "BooleanQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::BooleanQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::BooleanQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        },
        "MultipleChoiceManyQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        },
        "MultipleChoiceQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        },
        "NpsNumberScaleQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        },
        "NpsTextQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::NpsTextQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::NpsTextQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        },
        "NumberScaleQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::NumberScaleQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::NumberScaleQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        },
        "RankingQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::RankingQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::RankingQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        },
        "TextQuestionPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Questions::TextQuestionPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Questions::TextQuestionPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "dashboard": [
                true,
                false
              ],
              "explore_builder": [
                true,
                false
              ]
            }
          }
        }
      },
      "SurveyPage": {
        "kind": {
          "name": "kind",
          "source": "Warehouse::Pages::SurveyPage::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
              "name": "boolean_question_page",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                "reportable_type": "Census::Questions::BooleanQuestion",
                "reportable_kind": "boolean",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
              "name": "multiple_choice_many_question_page",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                "reportable_kind": "multiple_choice_many",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
              "name": "multiple_choice_question_page",
              "type": "enum_value",
              "integer_value": 3,
              "attributes": {
                "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                "reportable_kind": "multiple_choice",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
              "name": "nps_number_scale_question_page",
              "type": "enum_value",
              "integer_value": 4,
              "attributes": {
                "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                "reportable_kind": "nps_number_scale",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
              "name": "nps_text_question_page",
              "type": "enum_value",
              "integer_value": 5,
              "attributes": {
                "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                "reportable_type": "Census::Questions::NpsTextQuestion",
                "reportable_kind": "nps_text",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
              "name": "number_scale_question_page",
              "type": "enum_value",
              "integer_value": 6,
              "attributes": {
                "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                "reportable_type": "Census::Questions::NumberScaleQuestion",
                "reportable_kind": "number_scale",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
              "name": "text_question_page",
              "type": "enum_value",
              "integer_value": 7,
              "attributes": {
                "type": "Warehouse::Pages::Questions::TextQuestionPage",
                "reportable_type": "Census::Questions::TextQuestion",
                "reportable_kind": "text",
                "super_kind": "question_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
              "name": "freeform_survey_page",
              "type": "enum_value",
              "integer_value": 8,
              "attributes": {
                "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                "reportable_type": "Census::Surveys::FreeformSurvey",
                "reportable_kind": "freeform",
                "super_kind": "survey_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
              "name": "nps_survey_page",
              "type": "enum_value",
              "integer_value": 9,
              "attributes": {
                "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                "reportable_type": "Census::Surveys::NpsSurvey",
                "reportable_kind": "nps",
                "super_kind": "survey_page"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
              "name": "ranking_question_page",
              "type": "enum_value",
              "integer_value": 10,
              "attributes": {
                "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                "reportable_type": "Census::Questions::RankingQuestion",
                "reportable_kind": "ranking",
                "super_kind": "question_page"
              }
            }
          ],
          "values": [
            "boolean_question_page",
            "multiple_choice_many_question_page",
            "multiple_choice_question_page",
            "nps_number_scale_question_page",
            "nps_text_question_page",
            "number_scale_question_page",
            "text_question_page",
            "freeform_survey_page",
            "nps_survey_page",
            "ranking_question_page"
          ]
        },
        "visible_looks": {
          "source": "Warehouse::Pages::SurveyPage::Fields::VisibleLooks",
          "name": "visible_looks",
          "type": "struct",
          "fields": {
            "response_rate_dashboard": [
              true,
              false
            ]
          }
        },
        "types": [
          "Warehouse::Pages::Surveys::FreeformSurveyPage",
          "Warehouse::Pages::Surveys::NpsSurveyPage"
        ]
      },
      "Surveys": {
        "FreeformSurveyPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Surveys::FreeformSurveyPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Surveys::FreeformSurveyPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "response_rate_dashboard": [
                true,
                false
              ]
            }
          }
        },
        "NpsSurveyPage": {
          "kind": {
            "name": "kind",
            "source": "Warehouse::Pages::Surveys::NpsSurveyPage::Fields::Kind",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::BooleanQuestionPage",
                "name": "boolean_question_page",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::BooleanQuestionPage",
                  "reportable_type": "Census::Questions::BooleanQuestion",
                  "reportable_kind": "boolean",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceManyQuestionPage",
                "name": "multiple_choice_many_question_page",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceManyQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceManyQuestion",
                  "reportable_kind": "multiple_choice_many",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::MultipleChoiceQuestionPage",
                "name": "multiple_choice_question_page",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::MultipleChoiceQuestionPage",
                  "reportable_type": "Census::Questions::MultipleChoiceQuestion",
                  "reportable_kind": "multiple_choice",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsNumberScaleQuestionPage",
                "name": "nps_number_scale_question_page",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsNumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NpsNumberScaleQuestion",
                  "reportable_kind": "nps_number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsTextQuestionPage",
                "name": "nps_text_question_page",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NpsTextQuestionPage",
                  "reportable_type": "Census::Questions::NpsTextQuestion",
                  "reportable_kind": "nps_text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NumberScaleQuestionPage",
                "name": "number_scale_question_page",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::NumberScaleQuestionPage",
                  "reportable_type": "Census::Questions::NumberScaleQuestion",
                  "reportable_kind": "number_scale",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::TextQuestionPage",
                "name": "text_question_page",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::TextQuestionPage",
                  "reportable_type": "Census::Questions::TextQuestion",
                  "reportable_kind": "text",
                  "super_kind": "question_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::FreeformSurveyPage",
                "name": "freeform_survey_page",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::FreeformSurveyPage",
                  "reportable_type": "Census::Surveys::FreeformSurvey",
                  "reportable_kind": "freeform",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::NpsSurveyPage",
                "name": "nps_survey_page",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "type": "Warehouse::Pages::Surveys::NpsSurveyPage",
                  "reportable_type": "Census::Surveys::NpsSurvey",
                  "reportable_kind": "nps",
                  "super_kind": "survey_page"
                }
              },
              {
                "source": "Kore::Types::Warehouse::Page::Fields::Kind::RankingQuestionPage",
                "name": "ranking_question_page",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "type": "Warehouse::Pages::Questions::RankingQuestionPage",
                  "reportable_type": "Census::Questions::RankingQuestion",
                  "reportable_kind": "ranking",
                  "super_kind": "question_page"
                }
              }
            ],
            "values": [
              "boolean_question_page",
              "multiple_choice_many_question_page",
              "multiple_choice_question_page",
              "nps_number_scale_question_page",
              "nps_text_question_page",
              "number_scale_question_page",
              "text_question_page",
              "freeform_survey_page",
              "nps_survey_page",
              "ranking_question_page"
            ]
          },
          "visible_looks": {
            "source": "Warehouse::Pages::Surveys::NpsSurveyPage::Fields::VisibleLooks",
            "name": "visible_looks",
            "type": "struct",
            "fields": {
              "response_rate_dashboard": [
                true,
                false
              ]
            }
          }
        }
      }
    },
    "Place": {
    },
    "Report": {
      "kind": {
        "name": "kind",
        "source": "Warehouse::Report::Fields::Kind",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Warehouse::Report::Fields::Kind::SurveyReport",
            "name": "survey_report",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
              "type": "Warehouse::Reports::SurveyReport"
            }
          },
          {
            "source": "Kore::Types::Warehouse::Report::Fields::Kind::CustomReport",
            "name": "custom_report",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
              "type": "Warehouse::Reports::CustomReport"
            }
          }
        ],
        "values": [
          "survey_report",
          "custom_report"
        ]
      },
      "looker_model": {
        "name": "looker_model",
        "source": "Warehouse::Report::Fields::LookerModel",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Organization",
            "name": "organization",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Research",
            "name": "research",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          }
        ],
        "values": [
          "organization",
          "research"
        ]
      },
      "custom_fields": {
        "source": "Warehouse::Report::Fields::CustomFields",
        "name": "custom_fields",
        "type": "struct",
        "fields": {
          "pages_order": {
            "name": "pages_order",
            "source": "Warehouse::Report::Fields::CustomFields::Fields::PagesOrder",
            "type": "array"
          },
          "admin_color": {
            "name": "admin_color",
            "source": "Warehouse::Report::Fields::CustomFields::Fields::AdminColor",
            "type": "enum",
            "choices": [
              {
                "source": "Kore::Types::Ui::Fields::Color::Red",
                "name": "red",
                "type": "enum_value",
                "integer_value": 1,
                "attributes": {
                  "hex": "#db2828",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Orange",
                "name": "orange",
                "type": "enum_value",
                "integer_value": 2,
                "attributes": {
                  "hex": "#f2711c",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Yellow",
                "name": "yellow",
                "type": "enum_value",
                "integer_value": 3,
                "attributes": {
                  "hex": "#fbbd08",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Olive",
                "name": "olive",
                "type": "enum_value",
                "integer_value": 4,
                "attributes": {
                  "hex": "#b5cc18",
                  "contrast": "black"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Green",
                "name": "green",
                "type": "enum_value",
                "integer_value": 5,
                "attributes": {
                  "hex": "#21ba45",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Teal",
                "name": "teal",
                "type": "enum_value",
                "integer_value": 6,
                "attributes": {
                  "hex": "#00b5ad",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Blue",
                "name": "blue",
                "type": "enum_value",
                "integer_value": 7,
                "attributes": {
                  "hex": "#2185d0",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Violet",
                "name": "violet",
                "type": "enum_value",
                "integer_value": 8,
                "attributes": {
                  "hex": "#6435c9",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Purple",
                "name": "purple",
                "type": "enum_value",
                "integer_value": 9,
                "attributes": {
                  "hex": "#a333c8",
                  "contrast": "white"
                }
              },
              {
                "source": "Kore::Types::Ui::Fields::Color::Grey",
                "name": "grey",
                "type": "enum_value",
                "integer_value": 10,
                "attributes": {
                  "hex": "#767676",
                  "contrast": "white"
                }
              }
            ],
            "values": [
              "red",
              "orange",
              "yellow",
              "olive",
              "green",
              "teal",
              "blue",
              "violet",
              "purple",
              "grey"
            ]
          }
        }
      },
      "types": [
        "Warehouse::Reports::CustomReport",
        "Warehouse::Reports::SurveyReport"
      ]
    },
    "ReportingCategorization": {
    },
    "ReportingCategory": {
      "vertical": {
        "name": "vertical",
        "source": "Warehouse::ReportingCategory::Fields::Vertical",
        "type": "enum",
        "choices": [
          {
            "source": "Kore::Types::Fields::Vertical::Healthcare",
            "name": "healthcare",
            "type": "enum_value",
            "integer_value": 1,
            "attributes": {
            }
          },
          {
            "source": "Kore::Types::Fields::Vertical::Finance",
            "name": "finance",
            "type": "enum_value",
            "integer_value": 2,
            "attributes": {
            }
          }
        ],
        "values": [
          "healthcare",
          "finance"
        ]
      }
    },
    "Reports": {
      "CustomReport": {
        "kind": {
          "name": "kind",
          "source": "Warehouse::Reports::CustomReport::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Warehouse::Report::Fields::Kind::SurveyReport",
              "name": "survey_report",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Warehouse::Reports::SurveyReport"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Report::Fields::Kind::CustomReport",
              "name": "custom_report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Warehouse::Reports::CustomReport"
              }
            }
          ],
          "values": [
            "survey_report",
            "custom_report"
          ]
        },
        "looker_model": {
          "name": "looker_model",
          "source": "Warehouse::Reports::CustomReport::Fields::LookerModel",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Organization",
              "name": "organization",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Research",
              "name": "research",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            }
          ],
          "values": [
            "organization",
            "research"
          ]
        },
        "custom_fields": {
          "source": "Warehouse::Reports::CustomReport::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "pages_order": {
              "name": "pages_order",
              "source": "Warehouse::Reports::CustomReport::Fields::CustomFields::Fields::PagesOrder",
              "type": "array"
            },
            "admin_color": {
              "name": "admin_color",
              "source": "Warehouse::Reports::CustomReport::Fields::CustomFields::Fields::AdminColor",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Ui::Fields::Color::Red",
                  "name": "red",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "hex": "#db2828",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Orange",
                  "name": "orange",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "hex": "#f2711c",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Yellow",
                  "name": "yellow",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "hex": "#fbbd08",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Olive",
                  "name": "olive",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "hex": "#b5cc18",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Green",
                  "name": "green",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                    "hex": "#21ba45",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Teal",
                  "name": "teal",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                    "hex": "#00b5ad",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Blue",
                  "name": "blue",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                    "hex": "#2185d0",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Violet",
                  "name": "violet",
                  "type": "enum_value",
                  "integer_value": 8,
                  "attributes": {
                    "hex": "#6435c9",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Purple",
                  "name": "purple",
                  "type": "enum_value",
                  "integer_value": 9,
                  "attributes": {
                    "hex": "#a333c8",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Grey",
                  "name": "grey",
                  "type": "enum_value",
                  "integer_value": 10,
                  "attributes": {
                    "hex": "#767676",
                    "contrast": "white"
                  }
                }
              ],
              "values": [
                "red",
                "orange",
                "yellow",
                "olive",
                "green",
                "teal",
                "blue",
                "violet",
                "purple",
                "grey"
              ]
            }
          }
        }
      },
      "SurveyReport": {
        "kind": {
          "name": "kind",
          "source": "Warehouse::Reports::SurveyReport::Fields::Kind",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Warehouse::Report::Fields::Kind::SurveyReport",
              "name": "survey_report",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
                "type": "Warehouse::Reports::SurveyReport"
              }
            },
            {
              "source": "Kore::Types::Warehouse::Report::Fields::Kind::CustomReport",
              "name": "custom_report",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
                "type": "Warehouse::Reports::CustomReport"
              }
            }
          ],
          "values": [
            "survey_report",
            "custom_report"
          ]
        },
        "looker_model": {
          "name": "looker_model",
          "source": "Warehouse::Reports::SurveyReport::Fields::LookerModel",
          "type": "enum",
          "choices": [
            {
              "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Organization",
              "name": "organization",
              "type": "enum_value",
              "integer_value": 1,
              "attributes": {
              }
            },
            {
              "source": "Kore::Types::Warehouse::Report::Fields::LookerModel::Research",
              "name": "research",
              "type": "enum_value",
              "integer_value": 2,
              "attributes": {
              }
            }
          ],
          "values": [
            "organization",
            "research"
          ]
        },
        "custom_fields": {
          "source": "Warehouse::Reports::SurveyReport::Fields::CustomFields",
          "name": "custom_fields",
          "type": "struct",
          "fields": {
            "pages_order": {
              "name": "pages_order",
              "source": "Warehouse::Reports::SurveyReport::Fields::CustomFields::Fields::PagesOrder",
              "type": "array"
            },
            "admin_color": {
              "name": "admin_color",
              "source": "Warehouse::Reports::SurveyReport::Fields::CustomFields::Fields::AdminColor",
              "type": "enum",
              "choices": [
                {
                  "source": "Kore::Types::Ui::Fields::Color::Red",
                  "name": "red",
                  "type": "enum_value",
                  "integer_value": 1,
                  "attributes": {
                    "hex": "#db2828",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Orange",
                  "name": "orange",
                  "type": "enum_value",
                  "integer_value": 2,
                  "attributes": {
                    "hex": "#f2711c",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Yellow",
                  "name": "yellow",
                  "type": "enum_value",
                  "integer_value": 3,
                  "attributes": {
                    "hex": "#fbbd08",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Olive",
                  "name": "olive",
                  "type": "enum_value",
                  "integer_value": 4,
                  "attributes": {
                    "hex": "#b5cc18",
                    "contrast": "black"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Green",
                  "name": "green",
                  "type": "enum_value",
                  "integer_value": 5,
                  "attributes": {
                    "hex": "#21ba45",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Teal",
                  "name": "teal",
                  "type": "enum_value",
                  "integer_value": 6,
                  "attributes": {
                    "hex": "#00b5ad",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Blue",
                  "name": "blue",
                  "type": "enum_value",
                  "integer_value": 7,
                  "attributes": {
                    "hex": "#2185d0",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Violet",
                  "name": "violet",
                  "type": "enum_value",
                  "integer_value": 8,
                  "attributes": {
                    "hex": "#6435c9",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Purple",
                  "name": "purple",
                  "type": "enum_value",
                  "integer_value": 9,
                  "attributes": {
                    "hex": "#a333c8",
                    "contrast": "white"
                  }
                },
                {
                  "source": "Kore::Types::Ui::Fields::Color::Grey",
                  "name": "grey",
                  "type": "enum_value",
                  "integer_value": 10,
                  "attributes": {
                    "hex": "#767676",
                    "contrast": "white"
                  }
                }
              ],
              "values": [
                "red",
                "orange",
                "yellow",
                "olive",
                "green",
                "teal",
                "blue",
                "violet",
                "purple",
                "grey"
              ]
            }
          }
        }
      }
    },
    "Views": {
      "BooleanAnswer": {
      },
      "Location": {
      },
      "MultipleChoiceAnswer": {
      },
      "MultipleChoiceManyAnswer": {
      },
      "MultipleChoiceManyAnswerValue": {
      },
      "NpsNumberScaleAnswer": {
      },
      "Participant": {
      },
      "RankingAnswer": {
      },
      "RankingAnswerValue": {
      }
    }
  }
}