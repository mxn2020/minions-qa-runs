"""
Minions Qa-runs Python SDK

Test execution records, assertion results, and pass/fail tracking across clawspaces
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Qa-runs.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
