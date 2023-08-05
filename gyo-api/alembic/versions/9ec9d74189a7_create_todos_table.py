"""create todos table

Revision ID: 9ec9d74189a7
Revises: 
Create Date: 2023-08-06 00:04:02.327028

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9ec9d74189a7'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade():
    op.create_table(
        'todos',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('task', sa.String(50), nullable=False),
        sa.Column('completed', sa.Boolean, default=False),
    )

def downgrade():
    op.drop_table('todos')
